import React from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from './action';
import './ProductCard.css'
import { Card, Button, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

function ProductCard({ product, listType }) {
    const { id, name, price, description, image_url } = product;
    const dispatch = useDispatch();
    let handleClick;
    let buttonText;

    if (listType === "inventory") {
        handleClick = () => dispatch(add(product));
        buttonText = "+";
    } else {
        handleClick = () => dispatch(remove(product.id));
        buttonText = "-";
    }

    return (
        <div className="product-card" id={id}>
            <Card body outline color="secondary">
                <CardBody className="pb-4" >
                    <CardTitle><h3>{name}</h3></CardTitle>
                    <CardSubtitle>${price}</CardSubtitle>
                </CardBody>
                <Button color="primary" onClick={handleClick}>{buttonText}</Button>
            </Card>
        </div>
    )
}

export default ProductCard;