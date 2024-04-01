import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Restablecer contraseña" />
      <BreadCrumb title="Restablecer contraseña" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Restablecer contraseña</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Tu nueva contraseña"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirma tu nueva contraseña"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Recuperar contraseña</Link>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <Link className="button signup">Confirmar</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
