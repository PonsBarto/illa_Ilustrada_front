import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-7">
          <div className="checkout-left-data">
            <h3 className="website-name">Illa Ilustrada</h3>
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="text-dark total-price" to="/cart">
                    Carrito
                  </Link>
                </li>
                &nbsp; /
                <li
                  className="breadcrumb-item total-price active"
                  aria-current="page"
                >
                  Informacion
                </li>
                &nbsp; /
                <li className="breadcrumb-item total-price active">Envio</li>
                &nbsp; /
                <li className="breadcrumb-item active" aria-current="page">
                  Pago
                </li>
              </ol>
            </nav>
            <h4 className="title total">Informacion de contacto</h4>
            <p className="user-details total">
              Bartomeu Pons (ponsbarto@gmail.com)
            </p>
            <h4 className="mb-3">Direccion de Envio</h4>
            <form
              action=""
              className="d-flex gap-15 flex-wrap justify-content-between"
            >
              <div className="w-100">
                <select name="" className="from-control from-slect" id="">
                  <option value="" selected disabled>
                    {" "}
                    Seleccionar Pais
                  </option>
                </select>
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="from-control"
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Apellido"
                  className="from-control"
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Direccion"
                  className="from-control"
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Planta, puera, etc"
                  className="from-control"
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Poblacion"
                  className="from-control"
                />
              </div>
              <div className="flex-grow-1">
                <select name="" className="from-control from-slect" id="">
                  <option value="" selected disabled>
                    Seleccionar Provincia
                  </option>
                </select>
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Codigo Postal"
                  className="from-control"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="text-dark">
                    <BiArrowBack className="me-2" />
                    Regresar al carrito
                  </Link>
                  <Link to="/cart" className="button">
                    Continuar
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-5">
          <div className="border-bottom py-4">
            <div className="d-flex gap-10 mb-2 align-items-center">
              <div className="w-75 d-flex gap-10">
                <div className="w-25 position-relative">
                  <span
                    style={{ top: "-10px", right: "2px" }}
                    className="badge bg-seconday text-white rounded-cicle p-2 position-absolute"
                  >
                    1
                  </span>
                  <img
                    className="img-fluid"
                    src="../images/banner3.png"
                    alt="product image"
                  />
                </div>
                <div>
                  <h5 className="total-price">Nombre Producto</h5>
                  <p className="total-price">referencia</p>
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="total">14€</h5>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 total">Subtotal</p>
              <p className="mb-0 total-price">14€</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 total">Envio</p>
              <p className="mb-0 total-price">2€</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-4">
            <h4 className="total">Total</h4>
            <h5 className="total-price">16€</h5>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
