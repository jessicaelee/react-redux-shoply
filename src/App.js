import React from 'react';
import './App.css';
import InventoryList from './InventoryList';
import CartList from './CartList';
import ProductCard from './ProductCard';
import NavigationBar from './NavBar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Switch>
          <Route exact path="/products"><InventoryList /></Route>
          <Route exact path="/cart"><CartList /></Route>
          <Route exact path="/products/:id"><ProductCard /></Route>
          <Route exact path="/"><Redirect to="/products" /></Route>
          <Route><Redirect to="/products" /></Route>
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
