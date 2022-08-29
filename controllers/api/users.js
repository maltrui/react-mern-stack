module.exports = {
  create
};

function create(req, res) {
  // Baby step (TODO:)
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email
    }
  });
}