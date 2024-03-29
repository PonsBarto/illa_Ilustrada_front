import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Envios gratis para encargos superiores a 40€
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Contacto:{" "}
                <a className="text-white" href="tel: +34 628091700">
                  {" "}
                  +34 628091700
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">illa ilustrada</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Busca tu ilustracion"
                  aria-label="Busca tu ilustracion"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex aling-items-center justify-content-between ">
                <div>
                  <Link
                    to="/favoritos"
                    className="d-flex aling-items-center gap-10 text-white"
                  >
                    <img src="../images/compare.png" alt="wishlist" />
                    <p className="mb-0">
                      Lista de <br />
                      Favoritos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/Login"
                    className="d-flex aling-items-center gap-10 text-white"
                  >
                    <img src="../images/compare.png" alt="user" />
                    <p className="mb-0">
                      Mi Cuenta <br />
                      Registro
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex aling-items-center gap-10 text-white">
                    <img src="../images/compare.png" alt="carte" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">100€</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-itmes-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="" alt="" />
                      <span className="me-5 d-inline-block">
                        Ver Categorias
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Nuestra tienda</NavLink>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                    <NavLink to="/contact">Contacto</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
