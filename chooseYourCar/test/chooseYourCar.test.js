import { chooseYourCar } from '../chooseYourCar.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai';

describe('Test chooseYourCar', () => {
    describe('choosingType', () => {
        it('should throw an error on invalid input', () => {
            expect(() => chooseYourCar.choosingType("Sedan", "black", 1789)).to.throw(`Invalid Year!`);
            expect(() => chooseYourCar.choosingType("Sedan", "black", 3000)).to.throw(`Invalid Year!`);
            expect(() => chooseYourCar.choosingType("Sedan", "black", 2023)).to.throw(`Invalid Year!`);
            expect(() => chooseYourCar.choosingType("Sedan", "black", 1899)).to.throw(`Invalid Year!`);
        });
        it('should meet requirments for a car', () => {
            expect(chooseYourCar.choosingType("Sedan", "black", 2010)).to.be.equal(`This black Sedan meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType("Sedan", "black", 2021)).to.be.equal(`This black Sedan meets the requirements, that you have.`)
        });
        it('should not meet requirments for a car', () => {
            expect(chooseYourCar.choosingType("Sedan", "black", 2009)).to.be.equal(`This Sedan is too old for you, especially with that black color.`);
            expect(() =>chooseYourCar.choosingType("SUV", "black", 2015)).to.throw(`This type of car is not what you are looking for.`);
            expect(() =>chooseYourCar.choosingType("&^*", "black", 2015)).to.throw(`This type of car is not what you are looking for.`);
            expect(() =>chooseYourCar.choosingType("not a car", "black", 2015)).to.throw(`This type of car is not what you are looking for.`);
        });
    });

    describe('brandName', () => {
        it('should throw an error on invalid input', () => {
            expect (() => chooseYourCar.brandName("toyota", 0)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(67, 0)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName({}, 0)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(null, 0)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(undefined, 0)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"], 4)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"],-4)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"], "4")).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"], [1])).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"], {})).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"], null)).to.throw("Invalid Information!")
            expect (() => chooseYourCar.brandName(["toyota", "BMW", "Renault"], undefined)).to.throw("Invalid Information!")

        });

        it('should return the correct brands', () => {
            expect (chooseYourCar.brandName(["Toyota", "BMW", "Renault"], 2)).to.be.equal("Toyota, BMW")
            expect (chooseYourCar.brandName(["Toyota", "BMW", "Renault"], 0)).to.be.equal("BMW, Renault")
        });
    });

    describe('carFuelConsumption', () => {
        it('should throw an error on invalid input', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 6)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(-90, 6)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption("678", 6)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(null, 6)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(undefined, 6)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption({}, 678)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, -678)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, 0)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, "89")).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, null)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, undefined)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, [890908])).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(8066, {})).to.throw("Invalid Information!")
        });

        it('should return message for an efficient car', () => {
            expect(chooseYourCar.carFuelConsumption(7000, 400)).to.be.equal(`The car is efficient enough, it burns 5.71 liters/100 km.`)
            expect(chooseYourCar.carFuelConsumption(10000, 700)).to.be.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`)
        });

        it('should return message for an non efficient car', () => {
            expect(chooseYourCar.carFuelConsumption(7000, 40089)).to.be.equal(`The car burns too much fuel - 572.70 liters!`)
            
        });
    });
});