import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title="Registro" />
      <BreadCrumb title="Registro" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Registro</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Nombre" />
                <CustomInput
                  type="text"
                  name="surname"
                  placeholder="Apellido"
                />
                <CustomInput type="email" name="email" placeholder="Tu Email" />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Numero de telefono"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Tu contraseña"
                />
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
      </Container>
    </>
  );
};

export default Signup;
