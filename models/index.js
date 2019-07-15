const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require(`./User.js`)(sequelize, Sequelize)
let Question = require(`./Question.js`)(sequelize, Sequelize)

module.exports = { User, Question }