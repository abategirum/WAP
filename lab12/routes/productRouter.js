const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/resource/style.css" >
        <title>Document</title>
    </head>
    <body>
        <form action="add-product" method="post">
           <lable class="label">Name</label> <input class="inputs" name="name" type="text"></br>
           <lable class="label">Price</label> <input class="inputs" name="price" type="number"></br>
            <button class="succ-btn">add</button>
    </body>
    </html>
    
    `)
});

router.post('/products',(req,res,next) => {
  res.json(req.body);
});

module.exports = router;



