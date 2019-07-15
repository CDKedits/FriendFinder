module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model { }
  User.init({
    
  }, {
      sequelize,
      modelName: 'user'
    })

  return User
}