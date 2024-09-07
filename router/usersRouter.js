const x = 6;

function usersRouter(req, res) {
  res.json({ c: x });
}

module.exports = { usersRouter };
