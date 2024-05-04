import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import Wishlist from "../pages/Wishlist";

const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();
  let location = useLocation();
  const addToWish = (id) => {
    //console.log(id);
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <div
              className={`${
                location.pathname === "/store" ? `gr-${grid}` : "col-11"
              }`}
            >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    addToWish(item?._id);
                  }}
                >
                  <img src={Wishlist} alt="wishlist" />
                </button>
              </div>

              <div className="product-image">
                <img
                  src={item.images[0].url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={160}
                />
                <img
                  src={item.images[0].url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={160}
                />
              </div>

              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>

                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalRating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="price">{item?.price} €</p>
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
                    <img src="../images/add-cart.svg" alt="add to cart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
