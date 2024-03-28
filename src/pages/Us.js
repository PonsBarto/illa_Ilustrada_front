import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Us = () => {
  return (
    <>
      <Meta title={"Nosotros"} />
      <BreadCrumb title="Nosotros" />
      <div className="us-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Descripcion de la la empresa y demas textos</h3>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Us;
