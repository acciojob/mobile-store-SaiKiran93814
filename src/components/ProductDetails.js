import { useParams, useNavigate } from 'react-router-dom';
import products from '../data';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200px" />
      <p><strong>Price:</strong> {product.price} Rs</p>
      <p><strong>Desc:</strong><br />{product.description}</p>
      <button className="btn" onClick={() => navigate('/')}>Other products</button>
    </div>
  );
}

export default ProductDetails;