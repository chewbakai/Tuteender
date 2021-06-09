const express = require("express");
const path = require('path');
const tutorController = require("../controllers/tutorController");

const router = express.Router();
// Create a new Tutorial
router.post('/add-tutor', tutorController.create);
// Retrieve all Tutorials
router.get('/home', tutorController.getAllTutors);
// Update a Tutorial with id
router.put('/:id', tutorController.update);
// Delete a Tutorial with id
router.delete('/:id', tutorController.delete);
// Delete all Tutorials
router.delete('/', tutorController.deleteAll);
// Retrieve a single Tutorial with id
router.get('/tutors/:title', tutorController.getTutorDetail);
// router.post('/add-to-cart', tutorController.addToCart);
// router.get('/cart', tutorController.getCart);
// router.post('/delete-cart', tutorController.deleteInCart);

module.exports = router;