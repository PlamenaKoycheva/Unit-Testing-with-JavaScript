import {mathEnforcer} from "../03.mathEnforcer.js"
import { expect } from "chai"


describe ( "Test the Object mathEnforcer for functionalities", () =>{
 describe("Test addFive functionality", () => {
    it ("should return undifined if the parameter is not a number", () =>{
        expect(mathEnforcer.addFive("4")).to.be.undefined
        expect(mathEnforcer.addFive([5])).to.be.undefined
        expect(mathEnforcer.addFive({})).to.be.undefined
        expect(mathEnforcer.addFive(null)).to.be.undefined
        expect(mathEnforcer.addFive(undefined)).to.be.undefined
    })
    it("should return correct result if the parameter is a number", () => {
        expect(mathEnforcer.addFive(5)).to.equal(10)
        expect(mathEnforcer.addFive(0)).to.equal(5)
        expect(mathEnforcer.addFive(5.7)).to.equal(10.7)
        expect(mathEnforcer.addFive(-5)).to.equal(0)
    })
 })
 describe("Test subtractTen functionality", () => {
    it ("should return undifined if the parameter is not a number", () =>{
        expect(mathEnforcer.subtractTen("4")).to.be.undefined
        expect(mathEnforcer.subtractTen([5])).to.be.undefined
        expect(mathEnforcer.subtractTen({})).to.be.undefined
        expect(mathEnforcer.subtractTen(null)).to.be.undefined
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
    })
    it("should return correct result if the parameter is a number", () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5)
        expect(mathEnforcer.subtractTen(0)).to.equal(-10)
        expect(mathEnforcer.subtractTen(19.7)).to.equal(9.7)
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
    })
 })
  describe("Test sum functionality", () => {
    it ("should return undifined if the  first parameter is not a number", () =>{
        expect(mathEnforcer.sum("4", 0)).to.be.undefined
        expect(mathEnforcer.sum([5], 8)).to.be.undefined
        expect(mathEnforcer.sum({}, 89)).to.be.undefined
        expect(mathEnforcer.sum(null, 76)).to.be.undefined
        expect(mathEnforcer.sum(undefined, 45)).to.be.undefined
    })
       it ("should return undifined if the  second parameter is not a number", () =>{
        expect(mathEnforcer.sum(9, "0")).to.be.undefined
        expect(mathEnforcer.sum(90, [8])).to.be.undefined
        expect(mathEnforcer.sum(0, {})).to.be.undefined
        expect(mathEnforcer.sum(56,null)).to.be.undefined
        expect(mathEnforcer.sum(78, undefined)).to.be.undefined
    })
   it('shoud return sum if both parameters are number', () => {
            expect(mathEnforcer.sum(5, 7)).to.equal(12)
            expect(mathEnforcer.sum(-5, 7)).to.equal(2)
            expect(mathEnforcer.sum(-5, -17)).to.equal(-22)
            expect(mathEnforcer.sum(5.5, 7.8)).to.equal(13.3)
        })
 })
})