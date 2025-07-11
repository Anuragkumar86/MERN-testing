import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req: any, res: any) => {
    const parsedResponse = sumInput.safeParse(req.body)

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

     if(parsedResponse.data.a > 1000000 || parsedResponse.data.b > 1000){
        return res.status(411).json({
            message: "very big numbers"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const user = await prismaClient.sum.create({
        data: {

            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })
    console.log(user.a)

    res.json({
        answer
    })
});


app.get("/sum", (req: any, res: any) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});