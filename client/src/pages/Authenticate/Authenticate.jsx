import {Wrapper, LoginSignupOption} from "./authenticateStyled";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

export default function Authenticate() {
  return (
	  <Wrapper>
		<LoginSignupOption>
			<Login/>
			<Signup/>
		</LoginSignupOption>
	  </Wrapper>
  );
}