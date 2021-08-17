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
      const tasks = await Question.find({});
      res.json(tasks);
    } catch (e) {
      next(e);
    }
  }

};
