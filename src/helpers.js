import React from 'react';

const SALES_TAX = .0725;

const subTotal = prods => {
    return prods.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2);
};

const calcTax = subTotal => {
    return (subTotal * SALES_TAX).toFixed(2);
};

const calcTotal = subTotal => {
    return (subTotal * (1 + SALES_TAX)).toFixed(2);
}

export { SALES_TAX, subTotal, calcTax, calcTotal }