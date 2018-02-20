import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  handleCartClick = product => {
    console.log(product);
    this.setState({ test: 1 });
  };

  renderProducts() {
    return this.props.products.map(p => (
      <Product product={p} onAddToCartClick={this.handleCartClick} />
    ));
  }

  render() {
    return <div className="row products-list">{this.renderProducts()}</div>;
  }
}

export default ProductList;
