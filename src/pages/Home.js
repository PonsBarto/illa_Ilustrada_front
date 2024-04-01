import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
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
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Poblacion</h6>
                  <p>10 productos</p>
                  <img src="images/banner2.png" alt="Poblaciones" />
                </div>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Playas</h6>
                  <p>10 productos</p>
                  <img src="images/banner2.png" alt="Poblaciones" />
                </div>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Faros</h6>
                  <p>10 productos</p>
                  <img src="images/banner2.png" alt="Poblaciones" />
                </div>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Personalizado</h6>
                  <p>10 productos</p>
                  <img src="images/banner2.png" alt="Poblaciones" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="feature-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="selection-heading">Coleccion Destacada</h3>
          </div>
          <div className="col-12 d-flex">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((i, j) => (
                <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={i.image} alt="services" />
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
