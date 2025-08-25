



import {artGallery} from "../05.artGallery.js"
import { expect } from "chai"

describe ("Test the artGallery", () =>{
    describe("Test the addArtwork functionality", () => {
           
        it('shoud throw an error "Invalid Information!" if title is not a string', () => {
            expect(() => artGallery.addArtwork(42, '50 x 70', 'Picasso')).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork(['title'], '50 x 70', 'Picasso')).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork({}, '50 x 70', 'Picasso')).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork(null, '50 x 70', 'Picasso')).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork(undefined, '50 x 70', 'Picasso')).to.throw("Invalid Information!")
            
        }),
        it('shoud throw an error "Invalid Information!" if artist is not a string', () => {
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', 42)).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', ['name'])).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', {})).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', null)).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', undefined)).to.throw("Invalid Information!")
            
        })
         it('shoud throw an error "Invalid Dimensions!" if dimensions are not in the correct format', () => {
            expect(() => artGallery.addArtwork('Guernica', '50x70', "Monet")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('Guernica', '3456', "Monet")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('Guernica', null, "Monet")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('Guernica', undefined, "Monet")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('Guernica', 5070, "Monet")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('Guernica', {}, "Monet")).to.throw("Invalid Dimensions!")

            
        })
        it ("If the artist is not one of Van Gogh, Picasso, Monet throw an error 'This artist is not allowed in the gallery!'", () => {
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', 'Leonardo')).to.throw('This artist is not allowed in the gallery!')
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', '78230')).to.throw('This artist is not allowed in the gallery!')
            expect(() => artGallery.addArtwork('Guernica', '50 x 70', '&*(%(^&$')).to.throw('This artist is not allowed in the gallery!')
            
        })
        it("should return the message Artwork added successfully: '{title}' by {artist} with dimensions {dimensions}. ,if the input is valid", () => {
            expect(artGallery.addArtwork('Guernica', '50 x 70','Van Gogh')).to.equal("Artwork added successfully: 'Guernica' by Van Gogh with dimensions 50 x 70.")
        })
    
    })
    describe("Test the calculateCosts functionality", () => {
       it('shoud throw an error "Invalid Information!" if exhibitionCosts is not a positive number', () =>{
        expect(() => artGallery.calculateCosts(-10, 9, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts("10", 9, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts({}, 9, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(null, 9, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts([78], 9, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(undefined, 9, true)).to.throw("Invalid Information!")
       })
          it('shoud throw an error "Invalid Information!" if insuranceCostsis is not a positive number', () =>{
        expect(() => artGallery.calculateCosts(10, -9, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(10, "9", true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(9, {}, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(89, null, true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(90, [9], true)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(6, undefined, true)).to.throw("Invalid Information!")
       })
             it('shoud throw an error "Invalid Information!" if sponsor is not a boolean', () =>{
        expect(() => artGallery.calculateCosts(10, 9, 9)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(10, 9, "true")).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(10, 9, {})).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(10, 9, [true])).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(10, 9, null)).to.throw("Invalid Information!")
        expect(() => artGallery.calculateCosts(10, 9, undefined)).to.throw("Invalid Information!")
       })
       it ("should calculate the total cost by summing exhibitionCosts and insuranceCosts and if the sponsor is true apply a 10% discount to the total cost and then return the message'Exhibition and insurance costs are {totalPrice}, reduced by 10% with the help of a donation from your sponsor.'", () => {
        expect(artGallery.calculateCosts(100, 790, true)).to.equal("Exhibition and insurance costs are 801$, reduced by 10% with the help of a donation from your sponsor.")

       })
       it ("should calculate the total cost by summing exhibitionCosts and insuranceCosts and if the sponsor is false return the message:'Exhibition and insurance costs are {totalPrice}$.", () => {
        expect(artGallery.calculateCosts(100, 790, false)).to.equal('Exhibition and insurance costs are 890$.')
       })

    })
    describe("Test the organizeExhibits  functionality", () => {
        it ('shoud throw an error "Invalid Information!" if artworksCount is not a positive number', () =>{
            expect(() => artGallery.organizeExhibits(-9, 5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits("9", 5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits([9], 5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits({}, 5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(null, 5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(undefined, 5)).to.throw("Invalid Information!")
        })
         it ('shoud throw an error "Invalid Information!" if displaySpacesCount is not a positive number', () =>{
            expect(() => artGallery.organizeExhibits(9, -5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(6, "9")).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(87,[9])).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(8, {})).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(8,null)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(10, undefined)).to.throw("Invalid Information!")
        })
        it ("should calculate the artworksPerSpace and if it is less than 5 return :'There are only {artworksPerSpace} artworks in each display space, you can add more artworks.' ", () => {
            expect(artGallery.organizeExhibits(100, 50)).to.equal('There are only 2 artworks in each display space, you can add more artworks.')
            expect(artGallery.organizeExhibits(100, 47.5)).to.equal('There are only 2 artworks in each display space, you can add more artworks.')
        })
         it ("should calculate the artworksPerSpace and if it is more than 5 return :'You have {displaySpacesCount} display spaces with {artworksPerSpace} artworks in each space.' ", () => {
            expect(artGallery.organizeExhibits(100, 10)).to.equal('You have 10 display spaces with 10 artworks in each space.')
            expect(artGallery.organizeExhibits(100, 13)).to.equal('You have 13 display spaces with 7 artworks in each space.')
        })
        


    })
})