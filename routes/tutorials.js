const express = require("express");
const router = express.Router();
const tutorial = require('../controllers/tutorialController')

router.use((req, res, next) => {
	if (!req.session.userId) res.redirect("/accounts/login");
	else next();
});

router.get("/", tutorial.index);
router.post("/create", tutorial.create);
router.post("/:tutorialId/mark", tutorial.complete);
router.post("/:tutorialId/edit", tutorial.edit);
router.post("/:tutorialId/delete", tutorial.deleteT);

module.exports = router;
