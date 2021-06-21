import {HeaderWrapper, Ul, Li} from "./headerStyled";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/actions/LOGIN/logoutThunk";

export default function Header() {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser());
	localStorage.removeItem('user')
  }

  return (
	  <HeaderWrapper>
		<Ul>
		  <Li>
			<NavLink to={"/authenticate"} onClick={handleLogout}>log out</NavLink>
		  </Li>
		</Ul>
	  </HeaderWrapper>
  );

}