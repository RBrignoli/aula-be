const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-clientes')


router.get('', controlador.listClientes)
router.get('/:id', controlador.getCliente)
router.post('', controlador.createCliente)
router.post('/:id', controlador.updateCliente)
router.delete('/:id',controlador.deleteCliente)

module.exports = router;