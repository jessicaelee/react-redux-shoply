// const { add, remove } = require('./action');
const { ADD, REMOVE } = require('./actionTypes');
import * as actions from './action'


describe("action creators", function () {

    test("add is a function", function () {
        expect(typeof actions.add).toEqual("function")
    });

    test("remove is a function", function () {
        expect(typeof actions.remove).toEqual("function")
    });

    test("add returns action", function () {
        expect(actions.add({ product: "product" })).toEqual({
            type: ADD, payload: "product"
        });
    });

    test("remove returns action", function () {
        expect(actions.remove("id")).toEqual({
            type: REMOVE, payload: { id: "id" }
        });
    });
});