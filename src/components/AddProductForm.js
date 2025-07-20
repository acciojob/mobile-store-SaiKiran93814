// src/components/AddProductForm.js
import React, { useState } from 'react';

export default function AddProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.price) {
      const newProduct = {
        ...formData,
        id: Date.now(), // simple unique ID
      };
      onAdd(newProduct);
      setFormData({ name: '', description: '', image: '', price: '' }); // clear form
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Add Product</h3>
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
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
