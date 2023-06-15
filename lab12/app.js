const express = require('express');
const path = require('path');


const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');



const app = express();

app.set('env',"production");

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname)))



app.all('/',(req,res,next) => {
    res.send(`Hello, is it me you looking for?`);
});

app.use('/products',productRouter);

app.use('/users',userRouter);



app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,'pages','404.html'));
})

app.use((err,req,res,next) => {
    res.status(500).send('oh-lala!');
})


app.listen(3000,() => console.log('listening on 3000....'));

