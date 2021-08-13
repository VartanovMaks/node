const { Question } = require('../dataBase');

module.exports = {
  createTask: async (req, res, next) => {
    try {
      const { task, words } = req.body;
      const createdTask = await Question.create({ task, words });
      res.json(createdTask);
    } catch (e) {
      next(e);
    }
  },
  getAllTasks: async (req, res, next) => {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      const tasks = await Question.find({});
      res.json(tasks);
    } catch (e) {
      next(e);
    }
  }

};
