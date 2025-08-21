const request = require("supertest");
const sails = require("sails");

let app;

beforeAll((done) => {
  sails.lift(
    {
      hooks: { grunt: false }, // disable grunt
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

describe("Time API", () => {
  it("should return current time with 200", async () => {
    const res = await request(sails.hooks.http.app).get("/time");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("time"); // assuming controller returns { time: ... }
  });
});
