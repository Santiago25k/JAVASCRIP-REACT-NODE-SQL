//export const register = (req, res) => res.send('register');
//export const login = (req, res) => res.send('login');

import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const {username, email, password } = req.body
    
    try {
        
        const passwordHash = await bcrypt.hash(password, 10) //encripta la contraseña
        
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        //console.log(newUser)
        const userSaved = await newUser.save(); //guarda los datos en la base de datos de manera asincrona
        //res.send('registrando')
        //res.json(newUser)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        })
    } catch (error) {
        console.log(error)
    }
};

export const login = (req, res) => {
    console.log(req.body)
};