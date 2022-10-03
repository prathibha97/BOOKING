const express = require("express");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../../services/utils/verifyToken");
const {
  deleteuser,
  getAllusers,
  getuserById,
  updateuser,
} = require("./users.controller");

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("You are logged in!");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("You are logged in! & you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin! & you can delete all account");
// });

router.get("/", getAllusers);
router.get("/:id", verifyUser, getuserById);
router.put("/:id", verifyUser, updateuser);
router.delete("/:id", deleteuser);

module.exports = router;
