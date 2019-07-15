module.exports = app => {
  apiRoutes: require(`./apiRoutes.js`)(app)
  htmlRoutes: require(`./htmlRoutes`)(app)
}