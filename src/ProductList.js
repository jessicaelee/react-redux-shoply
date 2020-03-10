import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function ProductList({ listType }) {
    const prods = useSelector(st => st[listType]);
    let list;

    if (prods[0]) {
        list = prods.map(prod => <ProductCard key={prod.id} product={prod} listType={listType} />);
    }

    return (
        <div className={`product-list ${listType}`}>
            <h3>{listType}</h3>
            {list}
        </div>
    )

};

export default ProductList;