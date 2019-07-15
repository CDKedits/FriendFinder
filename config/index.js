const Sequelize = require(`sequelize`)
require('dotenv').config()

const sequelize = new Sequelize(process.env.LOCAL_URL)

module.exports = sequelize
