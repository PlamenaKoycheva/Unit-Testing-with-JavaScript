import { expect } from "chai"
import {rgbToHexColor} from "../03.RGBToHex.js"

describe("Test RGb to Hex color", () => {
    it("should return the color that answers to the integer number", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
        expect (rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
        expect(rgbToHexColor(15, 100, 250)).to.equal("#0F64FA");


    })
    it ("should return undifined if any of the parameters is not valid", () => {
        expect(rgbToHexColor(300, 256, 2000)).to.be.undefined
        expect(rgbToHexColor(-1, -90, -60)).to.be.undefined
        expect(rgbToHexColor("a", 40, 100)).to.be.undefined
        expect(rgbToHexColor(300, 40, 100)).to.be.undefined
        expect(rgbToHexColor(0, 255, 258)).to.be.undefined
        
    })
   
})