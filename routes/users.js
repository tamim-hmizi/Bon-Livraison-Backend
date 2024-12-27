var express = require("express");
var router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/:id", getUserById);

router.get("/", getAllUsers);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
