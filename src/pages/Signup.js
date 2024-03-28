import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Signup = () => {
  return (
    <>
      <Meta title="Registro" />
      <BreadCrumb title="Registro" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Registro</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control"
                  />
                  </div>
                  <div>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Apellido"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Numero de telefono"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Tu contraseña"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Recuperar contraseña</Link>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <Link className="button signup">Registro</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    
    </>
  );
};

export default Signup;