const express = require("express");
const path = require('path');
const tutorController = require("../controllers/tutorController");

const router = express.Router();

router.get('/home', tutorController.getAllTutors);
router.get('/tutors/:title', tutorController.getTutorDetail);
router.post('/add-to-cart', tutorController.addToCart);
router.get('/cart', tutorController.getCart);
router.post('/delete-cart', tutorController.deleteInCart);

module.exports = router;