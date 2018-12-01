var express = require('express'),
    router = express.Router()
    autoController = require('../controllers/autoController');

//CREATE
router.post('/', autoController.create);
//READ
router.get('/',autoController.getAll);
router.get('/:id',autoController.getOne);
//DELETE
router.delete('/:id',autoController.delete);
//UPDATE
router.put('/:id',autoController.update);

module.exports = router;