const request = require("supertest");

const app = require("../server");

describe("Task Manager API", () => {

    test("GET /api/tasks", async () => {

        const response =
            await request(app).get("/api/tasks");

        expect(response.statusCode).toBe(200);

        expect(
            Array.isArray(response.body)
        ).toBe(true);

    });


    test("POST /api/tasks", async () => {

        const response =
            await request(app)
                .post("/api/tasks")
                .send({
                    title: "Test CI/CD"
                });

        expect(response.statusCode).toBe(201);

        expect(response.body.title)
            .toBe("Test CI/CD");

    });


    test("PUT /api/tasks/:id", async () => {

        const response =
            await request(app)
                .put("/api/tasks/1");

        expect(response.statusCode).toBe(200);

    });

});