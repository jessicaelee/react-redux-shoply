const { add, remove } = require('./action');
const { ADD, REMOVE } = require('./actionTypes');


describe("action creators", function () {

    test("add is a function", function () {
        expect(typeof add).toEqual("function")
    });

    test("remove is a function", function () {
        expect(typeof remove).toEqual("function")
    });

    test("add returns action", function () {
        expect(add({ product: "product" })).toEqual({
            type: ADD, payload: "product"
        });
    });

    test("remove returns action", function () {
        expect(remove("id")).toEqual({
            type: REMOVE, payload: { id: "id" }
        });
    });
});