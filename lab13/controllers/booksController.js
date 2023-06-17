const Book = require('../models/book');

exports.save = (req,res,next) => {
    const book  = new Book(null,req.body.title,req.body.ISBN,req.body.publisherDate,req.body.author);
    return res.status(201).json(book);
}

exports.getAll = (req,res,next) => {
    res.json(Book.getAll);
}

exports.getBookById = (req,res,next) => {
    res.json(Book.getBookById(req.params.id));
}

exports.deleteById = (req,res,next) => {
    new Books(req.params.id).delete();
    res.status(204).end();
}

exports.update = (req,res,next) => {
    new Book(req.params.id,req.body.title,req.body.ISBN,req.body.publisherDate,req.body.author);
    
}