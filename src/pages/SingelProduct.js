import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  return (
    <>
      <Meta title="Nombre del Producto" />
      <BreadCrumb title="Nombre del Producto" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <div className="main-product-image">
                <img src="../images/banner2.png" alt="product image" />
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom py-3">
                  <h3 className="title">Nombre del producto</h3>
                </div>
                <div className="price py-3">
                  <p className="price">14€</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">2 Reviews</p>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Tipo :</h3>
                      <p className="product-data">Gfd</p>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Lugar :</h3>
                    <p className="product-data">Gfd</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categoria :</h3>
                    <p className="product-data">Gfd</p>
                  </div>
                  <div className="d-flex gap-10 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Cantidad :</h3>
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Añadir al carrito
                      </button>
                      <button className="button signup">Comprar ahora</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Descripcion</h4>
                  <p>Descripcion del producto seleccionado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="feature-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
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
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
