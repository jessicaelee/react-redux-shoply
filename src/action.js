import { ADD, REMOVE } from './actionTypes';

export function add(product) {
    return {
        type: ADD,
        payload: product
    }
};

export function remove(id) {
    return {
        type: REMOVE,
        payload: { id }
    }
}