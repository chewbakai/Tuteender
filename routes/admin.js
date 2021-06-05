const express = require('express');
const fs = require('fs');
const path = require('path');

const adminController = require('../controllers/adminController');

const router = express.Router();


router.get('/add-tutor', adminController.getTutorForm);
router.post('/add-tutor', adminController.postTutor);
router.get('/edit-tutor/:prodId', adminController.editTutorPage);
router.post('/edit-tutor', adminController.editTutorPost);
router.post('/delete-tutor', adminController.deleteTutor);

module.exports = router;