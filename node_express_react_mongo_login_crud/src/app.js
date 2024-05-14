const express = require('express');
const app = express();
const port = 6969;

app.get('/',(req, res)=>{
    res.send('Hola a todos!')
})

app.listen(port,() => {
    console.log(`Sevirdor escuchando en el puerto ${port}`);
})