import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';

function ProductList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
          <img src={product.image} alt={product.name} width="100%" />
          <h4>{product.name}</h4>
          <p>Price: {product.price}</p>
          <Link to={`/products/${product.id}`}><button>Buy</button></Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;