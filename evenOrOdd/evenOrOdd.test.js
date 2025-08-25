import { isOddOrEven } from "../01.evenOrOdd.js" 
import { expect } from "chai"

describe("Test for Even or Odd", () => {
    it ("should return undifined if the parameter is not type of string", () => {
        let input = 1234;
        expect(isOddOrEven(input)).to.be.undefined

    })
    it ("should return odd if the the length of a passed string is odd", () => {
        let input = "123";
        expect(isOddOrEven(input)).to.equal("odd")
    })
     it ("should return even if the the length of a passed string is even", () => {
        let input = "1234";
        expect(isOddOrEven(input)).to.equal("even")
    })
})