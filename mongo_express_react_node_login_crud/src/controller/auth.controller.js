//export const register = (req, res) => res.send('register');
//export const login = (req, res) => res.send('login');

import User from '../models/user.model.js'

export const register = async (req, res) => {
    const {username, email, password } = req.body
    
    try {
        const newUser = new User({
            username,
            email,
            password
        })
        //console.log(newUser)
        await newUser.save(); //guarda los datos en la base de datos de manera asincrona
        res.send('registrando')
    } catch (error) {
        console.log(error)
    }
};

export const login = (req, res) => {
    console.log(req.body)
};