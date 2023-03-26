const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const URLs = [
    { origin: 'https://www.google1.com', shortURL: 'asdfg1' },
    { origin: 'https://www.google2.com', shortURL: 'asdfg2' },
    { origin: 'https://www.google3.com', shortURL: 'asdfg3' }
  ]
  res.render('home', { URLs })
})

module.exports = router
