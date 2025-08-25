

// •	dismissEmployee (workforce, employeeIndex) - A function that accepts an array and number.
// o	The workforce array will store the names of its employees (["Petar", "Ivan", "George"…]).
// o	You must remove an element (employee) from the array that is located on the employeeIndex specified as a parameter.
// o	Finally, return the changed array of workforce as a string, joined by a comma and a space.



import {workforceManagement} from "../07.workforceManagement.js"
import { expect } from "chai"

describe ("Test the workForceManagemnet", () => {
    describe("Test the recruitStaff functionality", () => {
        it("if the value of the string role is different than 'Developer' , should return an error", () => {
            let name = "John"
            let role = "Automation QA"
            let experience = 7
            
            expect(() =>workforceManagement.recruitStaff(name, role, experience)).to.throw(`We are not currently hiring for this role.`)
        })
        it ("if the experience is less than 4 , should return the proper message", () => {
             let name = "John"
            let role = "Developer"
            let experience = 2
            let message = `John is not suitable for this role.`
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(message)
        })
                it ("if the experience is equal or greater than 4 , should return the proper message", () => {
             let name = "John"
            let role = "Developer"
            let experience = 4
            let message =  `John has been successfully recruited for the role of Developer.`
            expect(workforceManagement.recruitStaff(name, role, experience)).to.equal(message)
        })
    })
    describe("Test the computerWages functionality", () => {
        it ("if the hoursWorked are not a number or a negative number should throw an error", () => {
            expect(() =>workforceManagement.computeWages(-1)).to.throw("Invalid hours")
             expect(() =>workforceManagement.computeWages("7")).to.throw("Invalid hours")
              
               expect(() =>workforceManagement.computeWages({})).to.throw("Invalid hours")
                expect(() =>workforceManagement.computeWages(null)).to.throw("Invalid hours")
                 expect(() =>workforceManagement.computeWages(undefined)).to.throw("Invalid hours")
                  expect(() =>workforceManagement.computeWages(Boolean)).to.throw("Invalid hours")
        })
        it ("if an employee was working more than 160 hours should recive a bonus ", () => {
            let hoursWorked = 200
            let expected = 5100
            expect(workforceManagement.computeWages(hoursWorked)).to.equal(expected)
        })
        it ("if houresWorked is a valid number should return salary", () => {
            expect(workforceManagement.computeWages(0)).to.equal(0)
            expect(workforceManagement.computeWages(10)).to.equal(180)
        })
        
    })
    describe("Test the dismissEmployee functionality", () => {
        it ("if the workForce parameter is different than array should throw an error", () => {
            expect(() => workforceManagement.dismissEmployee(8, 1)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee("8", 1)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee({}, 1)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(null, 1)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(undefined, 1)).to.throw("Invalid input")
        })
        it ("if the employeeIndex parameter is different than number or a number outside the limits of the array should throw an error", () => {
            expect(() => workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], 9)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], "1")).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], {})).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], null)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], undefined)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], -9)).to.throw("Invalid input")
            
        })
        it ("if the workForce parameter is an Array and the employeeIndex is with valid number, should return a modified array", () => {
            expect(workforceManagement.dismissEmployee(["Pam", "Ivan", "Juan"], 0)).to.equal("Ivan, Juan")
        })
        
    })
})
