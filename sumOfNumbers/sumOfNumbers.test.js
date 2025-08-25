import {sum} from "../01.sumOfNumbers.js"
import  {expect} from "chai"

describe('Test function sum', () => {
    it ("test should return the correct result" ,() => {
        // arrange
        let inputArr = [1, 2, 3, 4]
        let expected = 10;

        // act
        let result = sum (inputArr)

        // assert
        expect(result).to.equal(expected)

    })
    it ("should return the same number if the array have 1 element", () => {
        //Arrange
        let inputArr = [9];
        let expected = 9;
        //Act 
        let result = sum(inputArr);
        //Assert
        expect(result).to.equal(expected)
    })
    it("should return zero if there is an array with zero", () => {
              //Arrange
        let inputArr = [0];
        let expected = 0;
        //Act 
        let result = sum(inputArr);
        //Assert
        expect(result).to.equal(expected)

    })
})