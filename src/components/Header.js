import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <NavLink to="/blurple" className={(active) => 'nav-link' + (!active ? ' unselected' : '')}>
        Blurple!
      </NavLink>
      <NavLink to="/pank" className={(active) => 'nav-link' + (!active ? ' unselected' : '')}>
        Pank.
      </NavLink>
      <NavLink to="/greige" className={(active) => 'nav-link' + (!active ? ' unselected' : '')}>
        Greige :(
      </NavLink>
    </header>
  );
}
