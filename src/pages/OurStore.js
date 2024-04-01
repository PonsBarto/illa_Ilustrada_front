import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStatus from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Nuestra Tienda"} />
      <BreadCrumb title="Nuestra Tienda" />
      <Container class1="store-wrapper home-wrapper-2 py-5">

          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Categorias</h3>
                <div>
                  <ul className="ps-0">
                    <li>Poblacion</li>
                    <li>Playa</li>
                    <li>Faros</li>
                    <li>Personalizado</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filtrado por</h3>
                <div>
                  <h5 className="sub-title">Disponibilidad</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="inStock"
                      />
                      <label className="form-check-label" htmlFor="inStock">
                        En Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="outOfStock"
                      />
                      <label className="form-check-label" htmlFor="outOfStock">
                        Sin Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Precio</h5>
                  <div className="d-flex aling-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="from"
                      />
                      <label htmlfor="floatingInput">Desde</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="to"
                      />
                      <label htmlfor="floatingInput1">Hasta</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colores</h5>
                  <div>
                    <div>
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "150px" }}>
                      organizar por:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Destacados</option>
                      <option value="best-selling" selected="selected">
                        mejor valorados
                      </option>
                      <option value="title-ascending">A-Z</option>
                      <option value="title-descending">Z-A</option>
                      <option value="price-ascending">Precio ascendente</option>
                      <option value="price-descending">
                        Precio descendiente
                      </option>
                      <option value="created-ascending">
                        de mas antiguo a mas nuevo
                      </option>
                      <option value="created-descending">
                        de mas nuevo a mas antiguo
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Productos</p>
                    <div className="grid">
                      <div className="d-flex gap-10 align-items-center">
                        <img
                          onClick={() => {
                            setGrid(4);
                          }}
                          src="images/gr4.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img
                          onClick={() => {
                            setGrid(6);
                          }}
                          src="images/gr3.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img
                          onClick={() => {
                            setGrid(12);
                          }}
                          src="images/gr2.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img
                          onClick={() => {
                            setGrid(24);
                          }}
                          src="images/gr.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>

      </Container>
    </>
  );
};

export default OurStore;
