import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

export default function ProductList() {
  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <a href={`/products/${product.id}`}>
            <div className="row">
              <img src={product.image} alt={product.name} width="100" />
              <p>{product.name}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
