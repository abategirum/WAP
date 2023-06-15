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
    <title>Document</title>
</head>
<body>
    <form action="login" method="post">
    <lable>User Name</lable><input name="username" type="text"></br>
    <lable>Password</lable><input name="password" type="password"></br>
    <button>Login</button>
</form>
</body>
</html>
    
    `)
});

router.post('/users', (req, res, next) => {
    res.json(req.body);
});

module.exports = router;