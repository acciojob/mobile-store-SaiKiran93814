import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
