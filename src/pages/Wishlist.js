import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title="Favoritos" />
      <BreadCrumb title="Favoritos" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
