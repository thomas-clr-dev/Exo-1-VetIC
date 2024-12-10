import { sum, multiplication, division, modulo, substract, isEven, isOdd, root, power } from "../calculator.js";
import { describe, it } from "node:test";

describe("Correct sum", () => {
    it("adds 1 + 2 to equal 3", () => {
        if (sum(1, 2) !== 3) {
            throw new Error("1 + 2 did not equal 3");
        }
    });
});

describe("Correct multiplication", () => {
    it("multiplies 2 * 3 === 6", () => {
        if (multiplication(2, 3) !== 6) {
            throw new Error("2 * 3 did not equal 6");
        }
    });
});

describe("Correct division", () => {
    it("divides 10 / 2 === 5", () => {
        if (division(10, 2) !== 5) {
            throw new Error("10 / 2 did not equal 5");
        }
    });
});

describe("Correct modulo", () => {
    it("modulos 10 % 3 === 1", () => {
        if (modulo(10, 3) !== 1) {
            throw new Error("10 % 3 did not equal 1");
        }
    });
});

describe("Correct substract", () => {
    it("substracts 10 - 3 === 7", () => {
        if (substract(10, 3) !== 7) {
            throw new Error("10 - 3 did not equal 7");
        }
    });
});

describe("Correct isOdd", () => {
    it("checks if 3 is odd", () => {
        if (!isOdd(3)) {
            throw new Error("3 is odd");
        }
    });
});

describe("Correct isEven", () => {
    it("checks if 4 is even", () => {
        if (!isEven(4)) {
            throw new Error("4 is even");
        }
    });
});

describe("Correct root", () => {
    it("finds the square root of 9", () => {
        if (root(9) !== 3) {
            throw new Error("The square root of 9 is 3");
        }
    });
});

describe("Correct power", () => {
    it("finds the power of 2^3", () => {
        if (power(2, 3) !== 8) {
            throw new Error("2^3 is 8");
        }
    });
});