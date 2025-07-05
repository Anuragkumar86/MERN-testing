import {describe, it, expect} from "@jest/globals"
import { app } from ".."
import request  from "supertest"

describe("POST/(sum)", () =>{
    it("sum should be correct", async() => {
        const res = await request(app).post("/sum").send({
            a: 6,
            b: 3
        })

        expect(res.body.answer).toBe(9);
        expect(res.statusCode).toBe(200);
    })

})