const User = require("../../models/User");

// update a user
async function updateuser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// delete a user
async function deleteuser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "user deleted successfully" });
  } catch (err) {
    next(err);
  }
}

// get one user
async function getuserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// get all users
async function getAllusers(req, res, next) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  updateuser,
  deleteuser,
  getuserById,
  getAllusers,
};
