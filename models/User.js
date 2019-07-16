module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model { }
  User.init({
    name: { type: Sequelize.STRING, allowNull: false},
    email: { type: Sequelize.STRING, allowNull: false},
    ans1: { type: Sequelize.INTEGER, allowNull: false}, 
    ans2: { type: Sequelize.INTEGER, allowNull: false}, 
    ans3: { type: Sequelize.INTEGER, allowNull: false}, 
    ans4: { type: Sequelize.INTEGER, allowNull: false}, 
    ans5: { type: Sequelize.INTEGER, allowNull: false}, 
    ans6: { type: Sequelize.INTEGER, allowNull: false}, 
    ans7: { type: Sequelize.INTEGER, allowNull: false}, 
    ans8: { type: Sequelize.INTEGER, allowNull: false}, 
    ans9: { type: Sequelize.INTEGER, allowNull: false}, 
    ans10: { type: Sequelize.INTEGER, allowNull: false}
  }, {
      sequelize,
      modelName: 'user'
    })

  return User
}