import "./NavBar.css";
import {CartWidget} from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarColor" className="container-fluid">
        <a className="navbar-brand" href="#"><h1>Cosmet</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Faciales</a></li>
                <li><a className="dropdown-item" href="#">Cuerpo</a></li>
                <li><a className="dropdown-item" href="#">Manos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Historia</a>
            </li>

            <CartWidget />

          </ul>
        </div>
      </div>
    </nav>
  )
}