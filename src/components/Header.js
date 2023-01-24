import { NavLink } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <header>
      <NavLink
        to="/RGB/49/3/176"
        // className={(active) => 'nav-link' + (!active ? ' unselected' : '')}
      >
        Blurple!
      </NavLink>
      <NavLink
        to="/RGB/255/109/226"
        // className={(active) => 'nav-link' + (!active ? ' unselected' : '')}
      >
        Pank.
      </NavLink>
      <NavLink
        to="/RGB/155/136/136"
        // className={(active) => 'nav-link' + (!active ? ' unselected' : '')}
      >
        Greige :(
      </NavLink>
    </header>
  );
}
