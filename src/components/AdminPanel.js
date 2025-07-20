
import React, { useState } from "react";
import productsData from "../data";

export default function AdminPanel() {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <div className="col-12">
        {products.map((product) => (
          <div key={product.id} className="admin-product-item">
            <a href={`/products/${product.id}`}>{product.name}</a>
            <button onClick={() => handleDelete(product.id)} className="btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
