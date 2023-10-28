const User = require('../models/user');
const { createError } = require('../middleware/error')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const userData = await User.findOne({ email })
        if (userData) {
            res.status(400).json({ message: "Email is already in use!!" })
        }
        const user = new User({
            firstName,
            lastName,
            email,
            password
        });
        await user.save();
        res.status(201).json({ message: "User registered successfully!" })
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email })
        if (!userData) {
            res.status(201).json({ message: "invalid login credentials" });
        }
        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            res.status(201).json({ message: "invalid login credentials" });
        }
        const token = jwt.sign({ userData }, process.env.SECRET_KEY)
        res.status(200).json({ message: "Successful login", token })

    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login
}