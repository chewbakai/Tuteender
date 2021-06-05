const express = require("express");
const path = require('path');
const tutorController = require("../controllers/tutorController");

const router = express.Router();

router.get('/home', tutorController.getAllTutors);
router.get('/tutors/:prodId', tutorController.getTutorDetail);
router.post('/add-to-cart', tutorController.addToCart);
router.get('/cart', tutorController.getCart);
router.post('/delete-cart', tutorController.deleteInCart);
// router.get('/error-demo', (req, res, next) => {
//     throw new Error('This is to test Error handling in express');
// });

module.exports = router;