const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');
// route to create project
router.post('/create', projectController.create);

// route to get the project
router.get('/:id', projectController.project);

// route to create issue
router.post('/:id', projectController.createIssue);

module.exports = router;
