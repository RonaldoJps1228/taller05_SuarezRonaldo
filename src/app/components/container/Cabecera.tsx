import { NavLink } from "react-router-dom";
import milogo from "../../../assets/img/books.png";

export const Cabecera = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={milogo} alt="milogo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Bookies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Bibliotecas
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Libros
                </a>
                <ul className="dropdown-menu" data-bs-popper="static">
                  <li>
                    <NavLink className="dropdown-item" to="/camcre">
                      Crear Libros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/camlis">
                      Listar Libros
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/camadm">
                      Administrar Libros
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/acer">
                  Acerca de...
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}