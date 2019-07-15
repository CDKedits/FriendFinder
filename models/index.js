const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require('./users.js')(sequelize, Sequelize)

module.exports = { User }