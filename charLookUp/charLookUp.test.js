import {lookupChar} from "../02.charLookUp.js"
import { expect } from "chai"

describe("Test for finding a single character in a string", () => {
     it('shoud return undefined if first input parameters is not a string', () => {
        expect(lookupChar(42, 2)).to.be.undefined
        expect(lookupChar([5], 2)).to.be.undefined
        expect(lookupChar({}, 2)).to.be.undefined
        expect(lookupChar(null, 2)).to.be.undefined
        expect(lookupChar(undefined, 2)).to.be.undefined
    }),
    it('shoud return undefined if second input parameters is not integer', () => {
        expect(lookupChar('Hello', [2])).to.be.undefined
        expect(lookupChar('Hello', 3.5)).to.be.undefined
        expect(lookupChar('Hello', '2')).to.be.undefined
        expect(lookupChar('Hello', {})).to.be.undefined
        expect(lookupChar('Hello', null)).to.be.undefined
        expect(lookupChar('Hello', undefined)).to.be.undefined
    }),
        it("should return undifined if the second parameter is not a number and the first parameter is not a string", () => {
        let input = 8907
        let index = "0"
        expect(lookupChar(input, index)).to.be.undefined

    })
    it("should return 'Incorrect index' if the index is longer or shorter than the string's length", () => {
       expect(lookupChar("plamena", -1)).to.equal( "Incorrect index")
       expect(lookupChar("plamena",100)).to.equal( "Incorrect index")
       expect(lookupChar("plamena", 7)).to.equal( "Incorrect index")
    })
     it("should return correct char with valid string and index", () => {
        let input = "plamena";
        let index = 1;
        expect(lookupChar(input, index)).to.equal("l")
    })


})