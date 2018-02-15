import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: "prod1", price: 3000 },
        { name: "prod2", price: 4000 },
        { name: "prod3", price: 5000 },
        { name: "prod4", price: 6000 }
      ]
    };
  }

  handleCartClick(product) {
    console.log(product);
  }

  renderProducts() {
    return this.state.products.map(p => (
      <Product product={p} onAddToCartClick={this.handleCartClick} />
    ));
  }

  render() {
    return <div className="row products-list">{this.renderProducts()}</div>;
  }
}

export default ProductList;
