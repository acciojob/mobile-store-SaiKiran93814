// src/components/EditProduct.js
import React, { useState } from 'react';

export default function EditProduct({ product, onSave, onDelete }) {
  const [formData, setFormData] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Edit Product</h2>
      <input
        className="form-control"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        className="form-control"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        className="form-control"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        className="form-control"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
      />
      <div style={{ marginTop: '1rem' }}>
        <button className="float-right" onClick={() => onSave(formData)}>
          Save
        </button>
        <button className="float-right" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
