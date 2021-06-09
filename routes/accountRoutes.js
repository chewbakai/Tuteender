const express = require("express");
const path = require('path');
const accountController = require("../controllers/accountController");

const router = express.Router();

router.get("/register_account", accountController.registerAccount);
router.post("/create_account", accountController.createAccount);
router.post("/login", accountController.loginAccount);
router.get("/myprofile", accountController.myAccount);
router.get("/myprofile/update", accountController.updateAccount);
router.get("/partials/about", accountController.about);
module.exports = router;
    