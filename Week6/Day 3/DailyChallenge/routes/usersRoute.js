const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/usersController");

router.post("/register", register);
router.post("/login", login);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

module.exports = router;
