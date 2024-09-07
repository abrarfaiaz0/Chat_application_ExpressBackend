const x = 6;

function loginRouter(req, res) {
  res.json({ c: req });
}

module.exports = { loginRouter };
