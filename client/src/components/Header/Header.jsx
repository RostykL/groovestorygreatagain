import { HeaderWrapper, Ul, Li } from './headerStyled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/slices/logout/actions/logoutUserAction';

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    dispatch(logoutUser());
  };

  return (
    <HeaderWrapper>
      <Ul>
        <Li>
          <NavLink to={'/authenticate'} onClick={handleLogout}>
            log out
          </NavLink>
        </Li>
      </Ul>
    </HeaderWrapper>
  );
}
