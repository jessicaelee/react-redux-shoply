import React from 'react';
import InventoryCard from './InventoryCard';
import { useSelector } from 'react-redux';

function InventoryList
  ({ listType }) {
  const prods = useSelector(st => st.inventory);
  let list;

  if (prods[0]) {
    list = prods.map(prod => <InventoryCard key={prod.id} product={prod} />);
  }

  return (
    <div className="InventoryList">
      <h3 className="mb-5">Check out our products!!</h3>
      {list}
    </div>
  )

};

export default InventoryList
  ;