// api/models/User.js
module.exports = {
  attributes: {
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
  },
};
