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
const app = express()
const server = require("http").Server(app);
const io = require("socket.io")(server);


mongoose.connect(
	"mongodb+srv://rostyk:RL9VYZTKf5wV62W2@cluster0.v7f7g.mongodb.net/GrooveStory?authSource=admin&replicaSet=atlas-8kbif6-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
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
app.use(bodyParser.urlencoded({extended: true}));
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
	if (!user) res.send("No User Exists");
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

  User.findOne({username: req.body.username}, async (err, doc) => {
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
app.get('/logout', (req, res) => {
  req.logout();
});

// isLogged
app.get('/user', (req, res) => {
  res.send(req.user)
})


// ROOM ROUTES
// CREATE NEW ROOM
app.post("/newRoom", (req, res) => {
  if (req.user.username) {
	Room.findOne({roomName: req.body.roomName}, async (err, doc) => {
	  if (err) throw err;
	  if (doc) res.send("Room Already Exists");
	  if (!doc) {
		const {
		  quantity,
		  roomName,
		  roomDescription,
		  users,
		  messages,
		} = req.body;
		const newRoom = new Room({
		  quantity,
		  roomName,
		  roomDescription,
		  users,
		  messages,
		});
		await newRoom.save();
		res.send("Room Created");
	  }
	});
  }
});

app.put('/add_message', (req, res) => {
  Room.findOne({roomName: req.body.roomName}, async (err, doc) => {
	await Room.updateOne({roomName: req.body.roomName}, {messages: [...doc.messages, req.body.message]});
	res.send('Room has been updated');
  })
})


app.post('/room', (req, res) => {
  Room.findOne({roomName: req.body.roomName}, async (err, doc) => {
	if (err) throw err;
	if (!doc) res.send("No Room Found");
	else {
	  res.send(doc);
	}
  })
})

app.get('/rooms', (req, res) => {
  Room.find({}).then(rooms => {
	res.send(rooms)
  }).catch(e => {
	res.status(500).send(e)
  })
})


let rooms = [];
let clients = new Map();

io.on('connection', (socket) => {

  // socket.on("user looking for a room", ({clientID, interests}) => {
  // let clientRoom = createRoom(clientID, interests, false);
  // clients.set(clientID, {interests, room: io.sockets.adapter.rooms})
  // let data = addToRoom({user: clientID, name: clientRoom.name, looking_for: clientRoom.looking_for}, rooms, clients)
  // rooms = data[0]
  // clients = data[1]
  // socket.join(clients.get(socket.id))
  // socket.to(clients.get(socket.id)).emit("chat message", socket.id + " приєднався")
  // })

  socket.on('chat message', (data) => {
    const {msg, roomName} = data;
	// let getRoom = clients.get(socket.id)
	// io.to(getRoom).emit('chat message', msg)
	io.to(roomName).emit('chat message', msg)
  })

  // CREATED ROOM
  // socket.on('chat message to created room', ({roomName, text}) => {
  // io.to(roomName).emit('chat message to created room', text)
  // })

  // socket.on('create room', ({name, description}) => {
  // let newRoom = createRoom(name, [], true);
  // newRoom.description  = description;
  // rooms.push(newRoom);
  // socket.join(name);
  // console.log(socket, 'has joind the room - ', name)
  // })

  socket.on('join created room', (roomName) => {
    if(roomName) {
	  socket.join(roomName);
	  console.log('user joined a room', roomName)
	  io.to(roomName).emit('chat message', {text:'приєднався' + socket.id})
	}
  })


  socket.on('disconnect', () => {
	// let getRoom = clients.get(socket.id)
	// io.to(getRoom).emit("chat message", socket.id + " покинув чат")
	// io.to(getRoom).emit('find another chat', {find: true})
	//
	// rooms = removeFromRoom(getRoom, rooms)
	// socket.leave(getRoom)
	// clients.delete(socket.id)
  });

});


server.listen(4444, () => {
  console.log("Server Has Started");
});
