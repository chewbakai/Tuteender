const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");


router.post("/create_account", accountController.createAccount);
//router.get("/read_account", accountController.readAccount);
router.get("/register_account", accountController.registerAccount);
router.post("/login_account", accountController.loginAccount);
router.post("/my_account", accountController.myAccount);

module.exports = router;
    