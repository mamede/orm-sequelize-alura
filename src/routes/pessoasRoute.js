const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController')

const router = Router();

router.get('/pessoas', PessoaController.GetAll)
router.get('/pessoas/:id', PessoaController.FindById)
router.post('/pessoas/create', PessoaController.Create)
router.put('/pessoas/:id', PessoaController.Update)
router.delete('/pessoas/:id', PessoaController.Delete)
module.exports = router