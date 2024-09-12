const text = "Hello, how are you?";
const sender = "Nuha";
const receiver = "Abrar";
const sentAt = new Date();

function usersRouter(req, res) {
  res.json({ message: text, sender: sender, receiver: receiver, time: sentAt });
}

module.exports = { usersRouter };


