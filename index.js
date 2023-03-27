const express = require('express')
const { create } = require('express-handlebars')
require('dotenv').config()
require('./database/db')

const app = express()

const hbs = create({
  extname: '.hbs',
  partialsDir: './views/components'
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/home'))
app.use('/auth', require('./routes/auth'))
// eslint-disable-next-line n/no-path-concat
app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
