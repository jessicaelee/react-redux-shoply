import React from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <ProductList listType="inventory" />
      <ProductList listType="cart" />
    </div>
  );
}

export default App;
