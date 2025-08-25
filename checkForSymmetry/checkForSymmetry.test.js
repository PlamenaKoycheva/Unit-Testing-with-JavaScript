import {isSymmetric} from "../02.checkForSymmetry.js"
import { expect } from "chai"

describe('Test for Symmetry', () => {
    it ("shoult return false if the input is not type of array", () => {
        // Arrange
        let input = ""
        
        // Act
        let result = isSymmetric(input);
        // Assert
        expect(result).to.be.false
    })
    it("should return true if input aray is symmetric", () => {
        
        expect(isSymmetric([1, 2, 1])).to.be.true;
        expect(isSymmetric(["hi", "hello", "hi"])).to.be.true;
        expect(isSymmetric(["1", 2, 2, "1"])).to.be.true
    })
    it ("shold return false if the input array is not symmetric", () => {
          expect(isSymmetric([1, 2, 1, 2])).to.be.false;
        expect(isSymmetric(["hi", "hello", "hi", "hello"])).to.be.false;
        expect(isSymmetric(["1", 2, "2",  "1"])).to.be.false
    })
    it ("should return true if the input have one element", () => {
        expect(isSymmetric([0])).to.be.true
        expect(isSymmetric(["name"])).to.be.true
    })
    
    })
