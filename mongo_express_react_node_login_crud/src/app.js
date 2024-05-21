import express from 'express'
import morgan from 'morgan'

import authRoutes from './routes/auth.routes.js'
const app = express();

//middleware de registro de solicitudes HTTP para aplicaciones Express
app.use(morgan('dev'));
app.use(express.json())

app.use("/api", authRoutes);


export default app;