const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController')

const router = Router();

router.get('/pessoas', PessoaController.GetAll)
router.get('/pessoas/:id', PessoaController.FindById)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.FindByMatricula)
router.post('/pessoas/create', PessoaController.Create)
router.post('/pessoas/:estudanteId/matricula/create', PessoaController.CreateMatricula)
router.put('/pessoas/:id', PessoaController.Update)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.UpdateMatricula)
router.delete('/pessoas/:id', PessoaController.Delete)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.DeleteMatricula)
module.exports = router