const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('-->Router Loaded Successfully<--');

// route for home page
router.get('/', homeController.home);

// route for project request
router.use('/project', require('./project'));

module.exports = router;
