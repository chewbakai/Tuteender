const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");

router.get("/", tutorController.gettutor);
router.get("/make_tutor", tutorController.maketutor);
router.get("/create_tutor", tutorController.createtutor);
router.get("/update_tutor", tutorController.updatetutor);
router.get("/delete_tutor", tutorController.deletetutor);

module.exports = router;