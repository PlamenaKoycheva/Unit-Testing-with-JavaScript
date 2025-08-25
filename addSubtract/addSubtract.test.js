import {createCalculator } from "../04.addSubtract.js"
import { expect } from "chai"

describe ( "Test for calculation", () =>{
    let calculator;
    beforeEach( () => {
        calculator = createCalculator()
    })
    it("should add number correctly if the variable is type of integer", () => {
        calculator.add(7)
        expect(calculator.get()).to.equal(7)
    })
    it("should add number correctly if the virable is type of string", () => {
        calculator.add("10")
        expect(calculator.get()).to.equal(10)
    })
       it("should subtract number correctly if the virable is type of string", () => {
        calculator.subtract("10")
        expect(calculator.get()).to.equal(-10)
    })
    it("should subtract number correctly if the variable is type of integer", () => {
        calculator.subtract(7)
        expect(calculator.get()).to.equal(-7)
    })
    it ("should return zero if object is just declare", () => {
        expect(calculator.get()).to.equal(0)
    } )
    it("should not modify value directly from outside", () => {
        expect(calculator.value).to.be.undefined
    })

})