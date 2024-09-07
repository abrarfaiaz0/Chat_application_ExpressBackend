const x = 6;

function inboxRouter(req, res) {
  res.json({ c: x });
}

module.exports = { inboxRouter };
