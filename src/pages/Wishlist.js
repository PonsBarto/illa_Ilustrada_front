import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { useEffect } from 'react';
import { getUserProductWishlist } from "../features/users/userSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title="Favoritos" />
      <BreadCrumb title="Favoritos" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState.length === 0 && (
            <div className="text-center fs-3">Sin datos</div>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => {
                      removeFromWishlist(item?._id);
                    }}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image bg-white">
                    <img
                      src={
                        item?.images[0]?.url
                          ? item.images[0].url
                          : "images/baner.jpg"
                      }
                      className="img-fluid d-block mx-auto"
                      alt="producto"
                      width={160}
                    />
                  </div>

                  <div className="py-3 px-3">
                    <h5 className="title">
                      
                    </h5>
                    <h6 className="price">10€</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
