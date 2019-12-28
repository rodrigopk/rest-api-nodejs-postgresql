'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    'TodoItem',
    {
      content: { type: DataTypes.STRING },
      complete: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {},
  );
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};
