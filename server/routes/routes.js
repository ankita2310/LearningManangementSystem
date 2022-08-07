const express = require('express');
const router = express.Router();
const UserController = require('../controllers/controller')


//Post Method
router.post('/create', UserController.create)

//Get all Method
router.get('/getAll', UserController.user_get)

//Get by ID Method
router.get('/getOne/:id', UserController.user_one)

//Update by ID Method
router.patch('/edit/:id', UserController.edit)

//Delete by ID Method
router.delete('/delete/:id', UserController.delete)

router.post('/login', UserController.find)

module.exports = router;