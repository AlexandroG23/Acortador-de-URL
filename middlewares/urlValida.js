const { URL } = require('url')
const urlValidar = (req, res, next) => {
  try {
    const { origin } = req.body
    const urlFrontend = new URL(origin)
    if (urlFrontend.origin !== 'null') {
      return next()
    } else {
      throw new Error('Error algo fallo 😯')
    }
  } catch (error) {
  //  console.log(error)
    return res.send('URL invalida 😯')
  }
}

module.exports = urlValidar
