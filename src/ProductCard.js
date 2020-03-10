import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { add, remove } from './action';

function ProductCard() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(st => st.inventory.find(prod => prod.id === id));
  const { name, description, price, image_url } = product;

  const cartProduct = useSelector(st => st.cart.find(prod => prod.id === id));

  const quantity = cartProduct ? cartProduct.quantity : 0;


  const handleRemove = () => {
    dispatch(remove(id))
  };

  const handleAdd = () => {
    dispatch(add(product))
  };

  return (
    <Card className="ProductCard">
      <Card.Body>
        <Card.Img variant="top" src={image_url} style={{ width: '400px' }} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>You have {quantity} in your cart!</Card.Text>
      </Card.Body>
      <Button size='md' variant="primary" onClick={handleAdd}>I Want It</Button>
      {quantity > 0 ? <Button size='md' variant="danger" onClick={handleRemove}>No thanks!</Button> : null}
    </Card>
  );
}

export default ProductCard;