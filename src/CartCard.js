import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from './action';
import './CartCard.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  console.log("INNER", product)
  const { id, name, price, quantity } = product;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(remove(product.id))
  };

  return (
    <div className="product-card" id={id}>
      <Card color="secondary">
        <Link to={`/products/${id}`}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Quantity: {quantity}</Card.Text>
          </Card.Body>
        </Link>
        <Button variant="danger" onClick={handleClick}>Remove from Cart</Button>
      </Card>
    </div>
  )
}

export default ProductCard;