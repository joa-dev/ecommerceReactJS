import "./NavBar.css";
import {CartWidget} from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarColor" className="container-fluid">
        <NavLink to="/" className="navbar-brand"><h1>TechStore</h1></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item"><NavLink to="/category/celulares">Celulares</NavLink></li>
                <li className="dropdown-item"><NavLink to="/category/computadoras">Computadoras</NavLink></li>
                <li className="dropdown-item"><NavLink to="/category/televisores">Televisores</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Historia</a>
            </li>
            <div>
              <CartWidget />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;