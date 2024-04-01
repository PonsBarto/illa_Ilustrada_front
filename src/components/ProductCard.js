import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div>
        <div
          className={` ${
            location.pathname === "/store" ? `gr-${grid}` : "col-11"
          }`}
        >
          <Link to="product/:id" className="product-card position-relative">
            <div className="wshlist-icon posistion-absolute">
              <div className="product-card position-relative">
                <div className="product-image">
                  <img src="../images/banner2.png" alt="product" />
                </div>
                <div className="product-details">
                  <h6 className="place">Playa</h6>
                  <h5 className="product-title">
                    Playa de Macarella ubicada en Ciutadella
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="5"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">14€</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button>
                      <img src="../images/wish.svg" alt="wishlist" />
                    </button>
                    <button>
                      <img src="../images/prodcompare.svg" alt="compare" />
                    </button>
                    <button>
                      <img src="../images/view.svg" alt="view" />
                    </button>
                    <button>
                      <img src="../images/add-cart.svg" alt="addcart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
