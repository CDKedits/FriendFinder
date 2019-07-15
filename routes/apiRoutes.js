const { User } = require(`../models`)

  module.exports = app => {
    app.get('/api/friends', (req, res) => {
      User.findAll({})
        .then(users => res.json(users))
        .catch(e => console.log(e))
    })
  }