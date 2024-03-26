import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="product-image">
          <img src="images/banner2.png" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="place">Playa</h6>
          <h5 className="product-title">
            Playa de Macarella ubicada en el sur de Ciutadella
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">14€</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
