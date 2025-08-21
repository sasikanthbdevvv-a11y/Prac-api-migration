const request = require("supertest");
const sails = require("sails");

let app;

beforeAll((done) => {
  // Lift Sails app before tests
  sails.lift(
    {
      hooks: { grunt: false }, // disable grunt hook
      log: { level: "warn" },
    },
    (err, server) => {
      if (err) return done(err);
      app = server;
      done();
    }
  );
});

afterAll((done) => {
  if (app) {
    sails.lower(done);
  } else {
    done();
  }
});

describe("Health API", () => {
  it("should return 200 and a status message", async () => {
    const res = await request(sails.hooks.http.app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status");
  });
});
