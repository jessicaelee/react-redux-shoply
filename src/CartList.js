import React from 'react';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';

function CartList() {
  const prods = useSelector(st => st.cart);
  console.log({prods})
  let list;

  if (prods[0]) {
    list = prods.map(prod => <CartCard key={prod.id} product={prod} />);
  }

  return (
    <div className="CartList">
      <h3>Your Cart</h3>
      {list}
    </div>
  )

};

export default CartList;