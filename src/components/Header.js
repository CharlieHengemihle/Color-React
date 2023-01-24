import { NavLink } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <header>
      <NavLink exact={true} to="/" className="home">
        Home
      </NavLink>
      <NavLink exact={true} to="/RGB/49/3/176" className="blurp">
        Blurple!
      </NavLink>
      <NavLink exact={true} to="/RGB/255/109/226" className="pank">
        Pank.
      </NavLink>
      <NavLink exact={true} to="/RGB/155/136/136" className="grey">
        Greige :(
      </NavLink>
    </header>
  );
}
