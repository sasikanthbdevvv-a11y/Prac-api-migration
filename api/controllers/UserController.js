// api/controllers/UserController.js
module.exports = {
  findByEmail: async function (req, res) {
    const email = req.query.email || req.body.email;
    if (!email) {
      return res.badRequest({ error: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.notFound({ error: 'User not found' });
    }

    return res.json(user);
  }
};
