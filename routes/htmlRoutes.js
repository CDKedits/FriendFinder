const { Question } = require(`../models`)

module.exports = app => {
  app.get(`/survey`, (req, res) => {
    Question.findAll({})
      .then(questions => res.json(questions))
      .catch(e => console.log(e))
  })
  app.post('/questions', (req, res) => {
    Question.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}