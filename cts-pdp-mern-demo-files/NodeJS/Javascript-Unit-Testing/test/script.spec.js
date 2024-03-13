import { sayHello, Add, person } from "../script.js";
import { assert, expect } from "chai";

describe("General test cases", () => {
  it("Should return valid string", () => {
    let result = sayHello("John");
    assert.equal(result, "Hello John");
  });

  it("Should return string value", () => {
    let result = sayHello("John");
    assert.typeOf(result, "string");
  });

  it("AddNumbers should return integer value", () => {
    let result = Add(10, 20);
    assert.equal(result, 30);
  });
});

describe("Test suite 2", () => {
  it("Person should have name property", () => {
    expect(person).to.have.property("name");
  });
  it("Person should have name property with value of 5 character length", () => {
    expect(person).to.have.property("name").lengthOf(5);
  });
});
