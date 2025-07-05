import {describe, expect, it} from "@jest/globals"
import { product, sum } from ".."

describe("TESTING SUM FUNCTION", () =>{
    it("sum of 4 and 6 should be 10", () =>{
        const finalAnswer = sum(4,6)
        expect(finalAnswer).toBe(10);
    })

    it("sum of 13 and 7 should be 20", () =>{
        const finalAnswer = sum(13,7)
        expect(finalAnswer).toBe(20);
    })
})

describe("TESTING PRODUCT FUNCTION", () =>{
    it("Product of 4 and 6 should be 24", () =>{
        const finalAnswer = product(4,6)
        expect(finalAnswer).toBe(24);
    })

    it("Product of 13 and 7 should be 91", () =>{
        const finalAnswer = product(13,7)
        expect(finalAnswer).toBe(91);
    })
})