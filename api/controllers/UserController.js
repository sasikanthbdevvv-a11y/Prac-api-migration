// api/controllers/UserController.js
module.exports = {
  // Create a user
  create: async function (req, res) {
    try {
      sails.log.info("👉 Creating user with:", req.body);

      // ✅ use sails.models.user
      const User = sails.models.user;

      const user = await User.create(req.body).fetch();
      return res.status(201).json(user);
    } catch (err) {
      sails.log.error("🔥 Error in UserController.create:", err);
      return res.serverError({ error: "Internal server error" });
    }
  },

  // List all users
  find: async function (req, res) {
    try {
      sails.log.info("👉 Fetching all users");
      const User = sails.models.user; // ✅
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      sails.log.error("🔥 Error in UserController.find:", err);
      return res.serverError({ error: "Internal server error" });
    }
  },

  // Find by email
  findByEmail: async function (req, res) {
    try {
      const email = req.query.email || req.body.email;
      if (!email) {
        return res.badRequest({ error: "Email is required" });
      }

      const User = sails.models.user; // ✅
      const user = await User.findOne({ email });
      if (!user) {
        return res.notFound({ error: "User not found" });
      }

      return res.json(user);
    } catch (err) {
      sails.log.error("🔥 Error in UserController.findByEmail:", err);
      return res.serverError({ error: "Internal server error" });
    }
  },
};
