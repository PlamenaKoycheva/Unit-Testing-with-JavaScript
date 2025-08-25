import { findNewApartment } from '../findNewApartment.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('test_findNewApartment', () =>{
    describe('isGoodLocation', () => {
        it('should throw error on invalid input', () => {
            expect(() => findNewApartment.isGoodLocation(90, true)).to.throw("Invalid input!")
             expect(() => findNewApartment.isGoodLocation([90], true)).to.throw("Invalid input!")
              expect(() => findNewApartment.isGoodLocation({}, true)).to.throw("Invalid input!")
               expect(() => findNewApartment.isGoodLocation(null, true)).to.throw("Invalid input!")
                expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw("Invalid input!")
                 expect(() => findNewApartment.isGoodLocation("Varna", 'true')).to.throw("Invalid input!")
                 expect(() => findNewApartment.isGoodLocation("Varna",90)).to.throw("Invalid input!")
                 expect(() => findNewApartment.isGoodLocation("Varna", ['true'])).to.throw("Invalid input!")
                 expect(() => findNewApartment.isGoodLocation("Varna", {})).to.throw("Invalid input!")
                 expect(() => findNewApartment.isGoodLocation("Varna", null)).to.throw("Invalid input!")
                 expect(() => findNewApartment.isGoodLocation("Varna",undefined)).to.throw("Invalid input!")
        });
        it('should return "This location is not suitable for you." if location is not valid', () => {
            expect(findNewApartment.isGoodLocation("Pleven", false)).to.be.equal("This location is not suitable for you.")
        });
        it('should return "You can go on home tour!" if location is good and public transport is available', () => {
            expect(findNewApartment.isGoodLocation("Varna", true)).to.be.equal("You can go on home tour!")
            expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.be.equal("You can go on home tour!")
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.be.equal("You can go on home tour!")

            
        });
        it('should return "There is no public transport in area." if location is good but public transport is unavailable', () => {
            expect(findNewApartment.isGoodLocation("Varna", false)).to.be.equal("There is no public transport in area.")
            expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.be.equal("There is no public transport in area.")
             expect(findNewApartment.isGoodLocation("Sofia", false)).to.be.equal("There is no public transport in area.")


        });
    }),
    describe('Test isLargeEnough', () => {
        it('Should return apartments that meet the wanted criteria for minimal square meters', () => {
            expect (findNewApartment.isLargeEnough([40, 50, 60], 50)).to.be.equal('50, 60');
            expect (findNewApartment.isLargeEnough([40, 50, 60], 80)).to.be.equal('');

        });

        it('Should throw error on onvalid input', () => {
            expect(() => findNewApartment.isLargeEnough({}, 40)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(null, 40)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(undefined, 40)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 40)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough("string", 40)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(40, 40)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "40")).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], null)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], undefined)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], [90])).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], {})).to.throw("Invalid input!");

      

 
        });
    }),
    describe('isItAffordable', () => {
        it('should throw an error on invalid input', () => {
                  expect(() => findNewApartment.isItAffordable(1000, "90000")).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable("1000", "90000")).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable(1000, null)).to.throw("Invalid input!")
             expect(() => findNewApartment.isItAffordable(1000, undefined)).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable(1000, {})).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable(1000, [890000])).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable("1000", 900000)).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable(null, 900000)).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable(undefined, 900000)).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable({}, 900000)).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable([90000], 900000)).to.throw("Invalid input!")
        });
        it('should not be affordable if price is greater than budget', () => {
            expect (findNewApartment.isItAffordable(500000, 100000)).to.equal( "You don't have enough money for this house!");
        });
        it('should be affordable if price is equal to or less than budget', () => {
            expect (findNewApartment.isItAffordable(50000, 100000)).to.equal( "You can afford this home!");
        });
    })
})


