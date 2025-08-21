module.exports = {
  check: function (req, res) {
    console.log("🔥 HealthController.check was called");
    return res.json({ status: "ok" });
  },
};
