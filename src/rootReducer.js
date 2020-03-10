import inventory from './data.json';
import { ADD, REMOVE } from './actionTypes';

function getProducts(inventory) {
    let prodArr = [];

    for (let id in inventory) {
        prodArr.push({ ...inventory[id], id });
    };

    return prodArr;
}


const INITIAL_STATE = { inventory: getProducts(inventory.products), cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE:
            return { ...state, cart: state.cart.filter(prod => prod.id !== action.payload.id) };
        default:
            console.warn("there is no action type: ", action.type);
            return state;
    };
};

export default rootReducer;