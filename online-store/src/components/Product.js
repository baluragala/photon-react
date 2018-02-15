import React from "react";

function Product({ product, onAddToCartClick }) {
  return (
    <div className="col-md-3">
      <div className="each-product">
        <div className="product-image-properties">
          <a href="product-one.html">
            <img src="assets/images/Samsung1.jpeg" className="images" />
          </a>
        </div>
        <h4 className="product-name">{product.name}</h4>
        <p className="product-price">{product.price}</p>
        <div className="number-input">
          <a href="#" className="decrement">
            –
          </a>
          <input type="number" className="value-result" defaultValue={1} />
          <a href="#" className="increment">
            +
          </a>
        </div>
        <div className="product-button">
          <button
            type="button"
            className="cart-add-button"
            onClick={function() {
              onAddToCartClick(product);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
