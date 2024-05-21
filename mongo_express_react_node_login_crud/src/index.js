import app from "./app.js"
const port = 6969;

import {conectarDB} from "./db.js"
conectarDB();

app.listen(port,() => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})

