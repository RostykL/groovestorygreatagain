const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
const Room = require("./models/room");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { uuid } = require("uuidv4");
require("dotenv").config();

const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Routes

// LOGIN
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.status(404).send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

// REGISTER
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

// LOGOUT
app.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successfully logged out" });
});

// isLogged
app.get("/user", (req, res) => {
  res.send(req.user);
});

// ROOM ROUTES
// CREATE NEW ROOM
app.post("/newRoom", (req, res) => {
  // if (req.user.username) {
  Room.findOne({ roomName: req.body.roomName }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.status(403).send("Room Already Exists");
    if (!doc) {
      const { quantity, roomName, roomDescription, users, messages } = req.body;
      const newRoom = new Room({
        quantity,
        roomName,
        roomDescription,
        users,
        messages,
      });
      await newRoom.save();
      res.send(newRoom);
    }
  });
  // }
});

function addMessage(roomName, message) {
  Room.findOne({ roomName: roomName }, async (err, doc) => {
    await Room.updateOne(
      { roomName: roomName },
      { messages: [...doc.messages, message] }
    );
    console.log("new message has been pushed");
  });
}

app.put("/add_message", (req, res) => {
  addMessage(req.body.roomName, req.body, message);
  res.send("Room has been updated");
});

app.post("/room", (req, res) => {
  Room.findOne({ roomName: req.body.roomName }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("No Room Found");
    else {
      res.send(doc);
    }
  });
});

app.get("/rooms", (req, res) => {
  Room.find({})
    .then((rooms) => {
      res.send(rooms);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

let rooms = [];
let clients = new Map();

io.on("connection", (socket) => {
  socket.on("join", async (roomName) => {
    try {
      let result = await Room.findOne({ roomName: roomName });
      if (!result) return;
      socket.join(roomName);
      socket.emit("joined", socket.id);
      socket.activeRoom = roomName;
    } catch (e) {
      console.error(e);
    }
  });

  socket.on("message", (message) => {
    const msg = { _id: new ObjectId(), text: message };
    addMessage(socket.activeRoom, msg);
    io.to(socket.activeRoom).emit("message", msg);
  });
});

server.listen(4444, () => {
  console.log("Server Has Started");
});
