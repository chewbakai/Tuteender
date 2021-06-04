const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.get("/profile", accountController.getAccount);
router.post("/create_account", accountController.createAccount);
router.get("/register_account", accountController.registerAccount);
router.post("/login_account", accountController.loginAccount);
router.get("/update_account", accountController.updateAccount);

module.exports = router;
    