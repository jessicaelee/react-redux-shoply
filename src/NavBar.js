import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  let quantity = useSelector(st => {
    if (st.cart.length) {
      return st.cart.reduce((acc, cur) => acc + cur.quantity, 0);
    } 
    return 0;
  });
  
  return (
    <Navbar bg="light" className="mb-5">
      <Nav className="mr-auto">
        <Nav.Link to="/products" >
          <NavLink to="/products">Products</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/cart">Your Cart ({quantity})</NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
