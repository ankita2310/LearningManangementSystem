const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const CourseController = require('../controllers/courseController')


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


//Courses API

//Get all Method
router.get('/getAllCourses', CourseController.course_get)

//Post Method
router.post('/createCourse', CourseController.create)

//Delete by ID Method
router.delete('/deleteCOurse/:id', CourseController.delete)

module.exports = router;