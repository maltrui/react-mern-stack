const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
  create
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token is a string
    const token = createJWT(user);
    // Yes, we can serialize (to JSON) strings
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign(
    // additional data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}