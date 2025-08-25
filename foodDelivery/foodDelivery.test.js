

import { expect } from "chai"
import {foodDelivery} from "../06.food delivery.js"
describe("Test the foodDelivery", () => {
    describe("Test the getCategory functionality", () => {
        it ("if the category is Vegan should return the proper message", ()=> {
            let message = "Dishes that contain no animal products."
            expect(foodDelivery.getCategory("Vegan")).to.equal(message)
        })
           it ("if the category is Vegetarian should return the proper message", ()=> {
            let message = "Dishes that contain no meat or fish."
            expect(foodDelivery.getCategory("Vegetarian")).to.equal(message)
        })
           it ("if the category is Gluten - Free should return the proper message", ()=> {
            let message = "Dishes that contain no gluten."
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal(message)
        })
            it ("if the category is All should return the proper message", ()=> {
            let message =  "All available dishes."
            expect(foodDelivery.getCategory("All")).to.equal(message)
        })
          it ("If the value of the string type is different from Vegan, Vegetarian, Gluten-Free, All, throw an error", ()=> {
            expect(() => foodDelivery.getCategory("string")).to.throw("Invalid Category!")
            expect(() => foodDelivery.getCategory({})).to.throw("Invalid Category!")
            expect(() => foodDelivery.getCategory(["Vegan"])).to.throw("Invalid Category!")
            expect(() => foodDelivery.getCategory(890)).to.throw("Invalid Category!")
            expect(() => foodDelivery.getCategory(null)).to.throw("Invalid Category!")
            expect(() => foodDelivery.getCategory(undefined)).to.throw("Invalid Category!")
        })
    
})
describe("Test the addMenuItem functionality", () => {
    it ("if the parameter of the menuItem is diferent than array, should throw an error", () => {
        expect(() => foodDelivery.addMenuItem({}, 1000)).to.throw("Invalid Information!")
        expect(() => foodDelivery.addMenuItem("string", 1000)).to.throw("Invalid Information!")
        expect(() => foodDelivery.addMenuItem(767986, 1000)).to.throw("Invalid Information!")
        expect(() => foodDelivery.addMenuItem(null, 1000)).to.throw("Invalid Information!")
        expect(() => foodDelivery.addMenuItem(undefined, 1000)).to.throw("Invalid Information!")
        
    })
    it ("if the parameter of the maxPrice is less than 5 and diferent than number, should throw an error", () => {
        expect(() => foodDelivery.addMenuItem([{name: "orange" , price: 2.4}, {name: "water" , price :1}], "1000")).to.throw("Invalid Information!")
       expect(() => foodDelivery.addMenuItem([{name: "orange" , price: 2.4}, {name: "water" , price :1}], [1000])).to.throw("Invalid Information!")
       expect(() => foodDelivery.addMenuItem([{name: "orange" , price: 2.4}, {name: "water" , price :1}], null)).to.throw("Invalid Information!")
       expect(() => foodDelivery.addMenuItem([{name: "orange" , price: 2.4}, {name: "water ", price :1}], undefined)).to.throw("Invalid Information!")
       expect(() => foodDelivery.addMenuItem([{name: "orange", price: 2.4}, {name:"water ", price :1}], 4.9)).to.throw("Invalid Information!")
       
    })
    it ("if the input is valid , should return the proper message", () => {
        let maxPrice = 200;
        let menuItem = [{name: "orange" , price: 2.4}, {name: "water" , price :1}];
        let expected = "There are 2 available menu items matching your criteria!"
        expect (foodDelivery.addMenuItem(menuItem, maxPrice)).to.equal(expected)

    })
      it('shoud return proper message if all items prices are gteater than maxPrice', () => {
            let menuItem = [
                {name: 'Item1', price: 10},
                {name: 'Item2', price: 50},
                {name: 'Item3', price: 30},
                {name: 'Item4', price: 35}
            ]

            let expected = `There are 0 available menu items matching your criteria!`;

            expect(foodDelivery.addMenuItem(menuItem, 7)).to.equal(expected)
        })
})
describe("Test the calculateOrderCost functionality ", () => {
    it ("if the parameter of shipping is diferent than array , should throw an error", () => {
        expect(() => foodDelivery.calculateOrderCost({}, ["sauce", "beverage"], true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(null, ["sauce", "beverage"], true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost("string", ["sauce", "beverage"], true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(56, ["sauce", "beverage"], true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(undefined, ["sauce", "beverage"], true)).to.throw( "Invalid Information!")
    })
    it ("if the parameter of addons is diferent than array , should throw an error", () => {
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], {}, true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], null, true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], "string", true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], 78, true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"],true, true)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], undefined, true)).to.throw( "Invalid Information!")
        
    })
    it ("if the parameter of discpont is diferent than boolean , should throw an error", () => {
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], {})).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], "string")).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], 90)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], null)).to.throw( "Invalid Information!")
        expect(() => foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], undefined)).to.throw( "Invalid Information!")
        
        
    })
    it ("if the discount is true should calculate the totalPrice and return the proper message", () => {
        let shipping = ["standard", "standard"];
        let addons = ["sauce", "sauce", "beverage"]
        let discount = true
        let expeced = "You spend $9.78 for shipping and addons with a 15% discount!"
        expect(foodDelivery.calculateOrderCost(shipping, addons, discount)).to.equal(expeced)
    })
       it ("if the discount is false should calculate the totalPrice and return the proper message", () => {
        let shipping = ["standard", "standard"];
        let addons = ["sauce", "sauce", "beverage"]
        let discount = false
        let expeced = "You spend $11.50 for shipping and addons!"
        expect(foodDelivery.calculateOrderCost(shipping, addons, discount)).to.equal(expeced)
    })


})

})

