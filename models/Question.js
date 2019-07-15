module.exports = (sequelize, Sequelize) => {
  class Question extends Sequelize.Model { }
  Question.init({
    question_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    question: { type: Sequelize.STRING, allowNull: false }
  }, {
      sequelize,
      modelName: 'question'
    })

  return Question
}