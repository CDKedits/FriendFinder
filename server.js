const express = require(`express`)
const app = express()
const { join } = require(`path`)

app.use(express.static(join(__dirname, `/public`)))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require(`./routes`)(app)

require(`./config`).sync()
  .then(_ => {
    console.log(`working`)
    app.listen(3000)
  })
  .catch(e => console.log(e))