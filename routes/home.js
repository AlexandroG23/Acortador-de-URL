const express = require('express')
const { leerUrls, agregarUrl, eliminarUrl, editarUrl, editarUrlForm, redireccionamiento } = require('../controllers/homeControllers')
const urlValidar = require('../middlewares/urlValida')

const router = express.Router()

router.get('/', leerUrls)
router.post('/', urlValidar, agregarUrl)
router.get('/eliminar/:id', eliminarUrl)
router.get('/editar/:id', editarUrlForm)
router.post('/editar/:id', urlValidar, editarUrl)
router.get('/:shortURL', redireccionamiento)

module.exports = router
