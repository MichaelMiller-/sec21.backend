import request from "supertest"
import app from "./app"
import MockDatabase from "./MockDatabase";

beforeEach(async () => {
    await MockDatabase.create();
});

afterEach(async () => {
    await MockDatabase.close();
})

describe('/GET projects', () => {
    it('it should GET all the projects', async () => {
        const response = await request(app)
            .post("/api/trustee/login")
            .set('Content-type', 'application/json')
            .send({
                login: "foo",
                password: "bar"
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.error.hasError).toBeFalsy();
        expect(response.body.error.message).toBe("");
        expect(response.body.success).toBeTruthy();
    });
});
