const assert = require("assert");
const add = require("./index");

assert.equal(add(1, 3), 4);
assert.equal(add(2, 3), 5);
assert.equal(add(4, 3), 7);
assert.equal(add(1, 5), 6);
