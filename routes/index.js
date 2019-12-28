const todosController = require('../controllers/todos.js');
const todoItemsController = require('../controllers/todoitems.js');

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Create Your Own Todo Lists API',
    }),
  );

  // Todos
  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);

  // TodoItems
  app.post('/api/todos/:todoId/items', todoItemsController.create);
};
