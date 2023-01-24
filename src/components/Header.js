import { NavLink } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <header>
      <NavLink exact={true} to="/">
        Home
      </NavLink>
      <NavLink exact={true} to="/RGB/49/3/176">
        Blurple!
      </NavLink>
      <NavLink exact={true} to="/RGB/255/109/226">
        Pank.
      </NavLink>
      <NavLink exact={true} to="/RGB/155/136/136">
        Greige :(
      </NavLink>
    </header>
  );
}
