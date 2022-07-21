import supertest from "supertest"
import app from "../src";


describe("teste", () => {
    it("teste2", async () => {
        const body = {
            "email": "eduardo334@gmail.com",
            "password": "1234567890"
        }
        const result = await supertest(app).post("/signup").send(body);
        expect(result.status).toEqual(201);
    })
});

//não funcionou, não sei o porque