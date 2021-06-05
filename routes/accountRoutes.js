const express = require("express");
const path = require('path');
const accountController = require("../controllers/accountController");

const router = express.Router();

router.get("/register_account", accountController.registerAccount);
router.post("/create_account", accountController.createAccount);
router.post("/login", accountController.loginAccount);
router.get("/myprofile", accountController.myAccount);

module.exports = router;
    