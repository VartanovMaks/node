const { Game } = require('../dataBase');

module.exports = {
  getAllGames: async (req, res, next) => {
    try {
      const games = await Game.find({});
      res.json(games);
    } catch (e) {
      next(e);
    }
  }
};
