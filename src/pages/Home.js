import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-baner position-relative">
                <img
                  src="/images/banner.png"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Compra tu ilustracion</h4>
                  <h5>Macarella</h5>
                  <p>14€</p>
                  <Link className="button">Comprar</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="small-baner position-relative p-1">
                    <img
                      src="/images/banner2.png"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Recien Llegado</h4>
                      <h5>Ciutadella</h5>
                      <p>14€</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="small-baner position-relative p-1">
                    <img
                      src="/images/banner2.png"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Top ventas</h4>
                      <h5>Binibeca</h5>
                      <p>14€</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="small-baner position-relative p-1">
                    <img
                      src="/images/banner2.png"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Top ventas</h4>
                      <h5>Mahon</h5>
                      <p>14€</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="small-baner position-relative p-1">
                    <img
                      src="/images/banner2.png"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Recien Llegado</h4>
                      <h5>Turqueta</h5>
                      <p>14€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
