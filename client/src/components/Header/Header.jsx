import {HeaderWrapper, Ul, Li} from "./headerStyled";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function Header() {

  const dispatch = useDispatch()


  return (
	  <HeaderWrapper>
		<Ul>
		  <Li>
			<NavLink to={"/authenticate"}>log out</NavLink>
		  </Li>
		</Ul>
	  </HeaderWrapper>
  );

}