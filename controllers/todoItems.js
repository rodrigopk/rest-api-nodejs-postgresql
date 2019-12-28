const TodoItem = require('../models').TodoItem;

const create = (request, response) =>
  TodoItem.create({
    content: request.body.content,
    todoId: request.params.todoId,
  })
    .then(todoItem => response.status(200).send(todoItem))
    .catch(error => response.status(400).send(error));

module.exports = {
  create,
};
