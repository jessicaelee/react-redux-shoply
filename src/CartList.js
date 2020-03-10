import React from 'react';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { subTotal, calcTax, calcTotal } from './helpers'

function CartList() {

  const prods = useSelector(st => st.cart);

  const sub = subTotal(prods)

  let list;

  if (prods[0]) {
    list = prods.map(prod => <CartCard key={prod.id} product={prod} />);
  }

  return (
    <div className="CartList">
      <h3>Your Cart</h3>
      {list}
      <div>Sub-Total: ${sub}</div>
      <div>Tax: ${calcTax(sub)}</div>
      <div>Total: ${calcTotal(sub)}</div>
    </div>
  )

};

export default CartList;