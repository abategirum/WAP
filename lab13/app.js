const express = require('express');
const app = express();

const bookRouter = require('./routes/bookRouter')


app.use(express.json());
app.use('/books',bookRouter);



app.use((req,res,next) => {
    res.status(404).send('API not found');
})

app.use((err,req,res,next) => {
    res.status(500).send('500 something went wrong');
})

app.listen(3000);