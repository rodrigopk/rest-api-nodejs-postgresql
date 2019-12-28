const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

const create = (request, response) =>
  Todo.create({
    title: request.body.title,
  })
    .then(todo => response.status(200).send(todo))
    .catch(error => response.status(400).send(error));

const list = (request, response) =>
  Todo.findAll({
    include: [
      {
        model: TodoItem,
        as: 'todoItems',
      },
    ],
  })
    .then(todos => response.status(200).send(todos))
    .catch(error => response.status(400).send(error));

const destroy = (request, response) => {
  return Todo.findByPk(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(400).send({
          message: 'Todo not found',
        });
      }

      todo.destroy();

      return res.status(200).send(todo);
    })
    .catch(error => res.status(400).send(error));
};

module.exports = {
  create,
  list,
  destroy,
};
