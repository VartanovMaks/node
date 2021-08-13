const router = require('express').Router();

const taskController = require('../controllers/task.controller');

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);

module.exports = router;
