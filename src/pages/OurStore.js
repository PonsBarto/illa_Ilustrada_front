import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title={"Nuestra Tienda"} />
      <BreadCrumb title="Nuestra Tienda" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
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
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Etiquetas</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Te proponemos</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
