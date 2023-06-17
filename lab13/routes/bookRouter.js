 const express = require('express');
 const router = express.Router();
 const booksController = require('../controllers/booksController');

router.post('/',booksController.save);
router.get('/',booksController.getAll);
router.get('/:id',booksController.getBookById);
router.delete('/:id',booksController.deleteById);
router.put('/:id',booksController.update);




 module.exports = router;