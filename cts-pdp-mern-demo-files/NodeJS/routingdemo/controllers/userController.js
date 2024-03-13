const getUser = (req, res) => {
  res.send("This is GetUser");
};

const getUsers = (req, res) => {
  res.send("This is GetUsers");
};

module.exports = { getUser, getUsers };
