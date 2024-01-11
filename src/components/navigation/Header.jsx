import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav-container">
      <div className="left">
        <div className="nav-item">
          <NavLink to="/home">PokeFinder</NavLink>
        </div>
      </div>
      <div className="right">
        <div className="nav-item">
          <NavLink to="/my-pokemon">My Pokemon</NavLink>
        </div>
      </div>
    </div>
  );
}
