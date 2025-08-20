module.exports = {
  now: function (req, res) {
    return res.json({
      time: new Date().toISOString()
    });
  }
};
