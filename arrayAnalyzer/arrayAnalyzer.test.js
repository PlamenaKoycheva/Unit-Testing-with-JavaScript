import {analyzeArray} from "../04.arrayAnalyzer.js"
import { expect } from "chai"

describe ("Test the Array Analyzer", () =>{
    it ("should return undifined if the parameter is not  an array", () => {
        expect(analyzeArray(7)).to.be.undefined
        expect(analyzeArray("string")).to.be.undefined
        expect(analyzeArray({})).to.be.undefined
        expect(analyzeArray(null)).to.be.undefined
        expect(analyzeArray(undefined)).to.be.undefined
    })
    it("should return undifined if the array is empty", () => {
        expect(analyzeArray([])).to.be.undefined
    })
    it ("should return undifined if the input is not an array of numbers ", () => {
        expect(analyzeArray(["name", "age", "city"])).to.be.undefined
        expect(analyzeArray(["4", "32", "90"])).to.be.undefined
        expect(analyzeArray([7, 8, "90"])).to.be.undefined
    })
    it ("should return object  if the array contains a single number", () => {
        expect(analyzeArray([9])).to.deep.equal({ min: 9, max: 9, length: 1 })
    })
      it("should return an object if the input is an array of numbers", () => {
        let input = [4, 3, 2, 1];
        let expected = {
            min: 1,
            max: 4,
            length: 4
        };
        let result = analyzeArray(input);
        expect(result).to.deep.equal(expected);
    });
})