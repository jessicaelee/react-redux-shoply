import inventory from './data.json';
import { ADD, REMOVE } from './actionTypes';

function getProducts(inventory) {
  let prodArr = [];

  for (let id in inventory) {
    prodArr.push({ ...inventory[id], id });
  };

  return prodArr;
}


const cart = JSON.parse(localStorage.getItem("cart"));

cart ? localStorage.setItem("cart", JSON.stringify(cart)) : localStorage.setItem("cart", JSON.stringify([]));

const INITIAL_STATE = { inventory: getProducts(inventory.products), cart: JSON.parse(localStorage.getItem("cart")) };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD:
      let existingItem = state.cart.find(prod => action.payload.id === prod.id);

      if (existingItem) {
        const newItem = { ...existingItem, quantity: existingItem.quantity + 1 }

        localStorage.setItem("cart", JSON.stringify(state.cart.map(prod => prod.id === existingItem.id ? newItem : prod)));

        return {
          ...state,
          cart: state.cart.map(prod => prod.id === existingItem.id ? newItem : prod)
        }
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        localStorage.setItem("cart", JSON.stringify([...state.cart, newItem]));

        return {
          ...state,
          cart: [...state.cart, newItem]
        };
      }

    case REMOVE:
      const currentItem = state.cart.find(prod => action.payload.id === prod.id);
      const deletedItem = { ...currentItem, quantity: currentItem.quantity - 1 };

      if (deletedItem.quantity === 0) {

        localStorage.setItem("cart", JSON.stringify(state.cart.filter(prod => prod.id !== action.payload.id)));

        return {
          ...state,
          cart: state.cart.filter(prod => prod.id !== action.payload.id)
        }
      } else {

        localStorage.setItem("cart", JSON.stringify(state.cart.map(prod => prod.id === action.payload.id ? deletedItem : prod)));
        return {
          ...state,
          cart: state.cart.map(prod => prod.id === action.payload.id ? deletedItem : prod)
        };
      }

    default:
      console.warn("there is no action type: ", action.type);
      return state;
  };
};

export default rootReducer;