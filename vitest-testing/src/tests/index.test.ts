import { describe, it, expect, vi } from "vitest"
import { app } from ".."
import request from "supertest"
import { prismaClient } from "../__mocks__/db"


vi.mock('../db')


describe("POST/(sum)", () => {
    it("sum should be correct", async () => {
        prismaClient.sum.create.mockResolvedValue({
            id: 1,
            a: 2,
            b: 2,
            result: 2
        })

        vi.spyOn(prismaClient.sum, "create");

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })

        expect(prismaClient.sum.create).toHaveBeenCalledWith({
            data: {
                a: 1,
                b: 2,
                result: 3
            }
        })

        expect(res.body.answer).toBe(3);
        expect(res.statusCode).toBe(200);
    })

    it("number should be not very big", async () => {
        const res = await request(app).post("/sum").send({
            a: 2000000,
            b: 3
        })

        expect(res.body.message).toBe("very big numbers");
        expect(res.statusCode).toBe(411);
    })

})