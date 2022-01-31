import React from "react";

import "./Product.css";

const Product = (props) => {
  let gender = props.gender ? "♂️" : "♀️";
  return (
    <div className="product">
      <div className="product__card">
        <div className="review__container">
          <ul className="review">
            <li>🌟</li>
            <li>🌟</li>
            <li>🌟</li>
            <li>🌟</li>
            <li>🌟</li>
          </ul>
        </div>
        <span className="gender">{gender}</span>
        <div className="img_container">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="detail">
          <div className="info">
            <h3 className="item">{props.name}</h3>
            <p>{props.description}</p>
            <div className="size__container">
              <h6>select a size</h6>
              <ul className="sizes">
                {props.sizes.map((size, index) => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            </div>
            <div className="price__container">
              Total Price :<span className="price">{props.price}</span>
            </div>
          </div>
          <footer className="footer">
            <button id="product_id" className="add_to_cart">
              ADD TO CART <span></span>
            </button>
            <button className="like">❤️</button>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Product;
