const router = require('express').Router();

const gameController = require('../controllers/game.controller');

router.get('/', gameController.getAllGames);

module.exports = router;
