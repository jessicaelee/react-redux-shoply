import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { subTotal, calcTotal } from './helpers'

function NavigationBar() {
  let cart = useSelector(st => st.cart)
  console.log({ cart })
  let quantity = 0;
  if (cart.length) {
    quantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  let total = calcTotal(subTotal(cart));

  return (
    <Navbar bg="light" className="mb-5">
      <Nav className="mr-auto">
        <Nav.Link to="/products" >
          <NavLink to="/products">Products</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/cart">Your Cart ({quantity}, ${total})</NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
