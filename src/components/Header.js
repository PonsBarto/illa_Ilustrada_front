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
                <Link className="text-white">Illa Ilustrada</Link>
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
              <div className="header-upper-links d flex aling-items-center justify-content-between ">
                <div>
                  <Link>
                  <img src="images/refresh.png" alt=""/>
                  </Link>
                </div>
                <div>
                  <Link>
                  <img src="" alt=""/>
                  </Link>
                </div>
                <div>
                  <Link>
                  <img src="" alt=""/>
                  </Link>
                </div>
                <div>
                  <Link>
                  <img src="" alt=""/>
                  </Link>
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
