import { useState } from "react";
import productsData from "../data";

export default function AdminPanel() {
  const [products, setProducts] = useState(productsData);

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const editProduct = (id, updatedProduct) => {
    setProducts(products.map((p) => p.id === id ? updatedProduct : p));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {products.map((p, index) => (
        <div key={p.id}>
          <input
            className="form-control"
            value={p.name}
            onChange={(e) =>
              editProduct(p.id, { ...p, name: e.target.value })
            }
          />
          <button className="float-right" onClick={() => deleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}
      {/* Add Product Form (Create new product) */}
    </div>
  );
}
