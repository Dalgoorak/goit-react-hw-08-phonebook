import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operations';
import { FcHome } from 'react-icons/fc';
import css from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.icon}>
          <FcHome size={40} />
        </NavLink>
        {token && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
        <ul className={css.ul}>
          {!token && (
            <li className={css.li}>
              <NavLink to="/registration" className={css.link}>
                Registration
              </NavLink>
            </li>
          )}
          {!token && (
            <li className={css.li}>
              <NavLink to="/login" className={css.link}>
                Authorization
              </NavLink>
            </li>
          )}
        </ul>
        {token && (
          <button
            type="button"
            onClick={() => dispatch(logout())}
            className={css.button}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
