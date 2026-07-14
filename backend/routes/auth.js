const express = require("express");
const router = express.Router();

const { register, login, forgotPassword, resetPassword, updateProfile } = require("../controllers/authControllers");

router.post("/register", register);
router.post("/login",login);
router.post("/forgotpassword",forgotPassword);
router.post("/resetpassword", resetPassword);
router.put("/profile/:id", updateProfile);

module.exports = router;