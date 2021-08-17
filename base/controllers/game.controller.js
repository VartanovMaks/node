const { Game } = require('../dataBase');

module.exports = {
  getAllGames: async (req, res, next) => {
    try {
      // res.header('Access-Control-Allow-Origin', '*');
      // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      const games = await Game.find({});
      res.json(games);
    } catch (e) {
      next(e);
    }
  }
};
