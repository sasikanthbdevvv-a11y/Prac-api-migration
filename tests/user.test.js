// tests/user.test.js
const UserController = require("../api/controllers/UserController");

describe("UserController", () => {
  it("should have a create method", () => {
    expect(typeof UserController.create).toBe("function");
  });
});
