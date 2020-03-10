import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './action';
import './InventoryCard.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ProductCard({ product }) {
  const { id, name, price, description, image_url } = product;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add(product))
  };

  return (
    <div className="product-card" id={id}>
      <Card color="secondary">
        <Link to={`/products/${id}`}>
          <Card.Body className="pb-4" >
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
          </Card.Body>
        </ Link>
        <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
      </Card>
    </div >
  )
}

export default ProductCard;