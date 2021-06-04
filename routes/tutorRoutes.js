const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");

router.post("/", tutorController.getTutor);
// router.get("/return_tutor", tutorController.returnTutor);
// router.post("/profile_tutor", tutorController.profileTutor);
// router.post("/update_tutor", tutorController.updateTutor);
// router.get("/search_tutor", tutorController.searchTutor);

module.exports = router;