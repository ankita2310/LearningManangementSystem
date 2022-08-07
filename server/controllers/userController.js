const  mongoose = require('mongoose')

const Model = require('../models/userModel');
const Service = require('../services/userServices')
const bcrypt = require('bcrypt')

exports.user_get = async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.user_one = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.create = async (req, res) => {
    const data = new Model({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        isAdmin: false,
        membershipType: req.body.membershipType
    })
    try {
        let errorMessage = Service.validateInput(req)
        if(errorMessage !== '') {
            throw new Error(errorMessage);
        }
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message})
    }
}

exports.edit = async (req, res) => {
    try {
        let errorMessage = Service.validateInput(req)
        if(errorMessage !== '') {
            throw new Error(errorMessage);
        }
        if(typeof req.body.password === 'string') {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(req.body.password, salt)
            req.body.password = hashPassword
        }
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const user = req.body
        const id = req.params.id;
        const dbUser = await Model.findById(id)
        if(bcrypt.compareSync(user.password, dbUser.password) && user.email === dbUser.email) {
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${user.email} has been deleted..`)
    } else {
        throw new Error('Invalid email or password')
    }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.find = async (req,res) => {
    try {
        const user = req.body
        const dbUser = await Model.findOne({email:user.email})
        if(bcrypt.compareSync(user.password, dbUser.password) && user.email === dbUser.email) {
            res.json({ id: dbUser.id, isAdmin:dbUser.isAdmin })
        }
        else {
            throw new Error('Invalid Username or Password')
        }
    }    catch (error) {
        res.status(400).json({ message: error.message })
    }
}