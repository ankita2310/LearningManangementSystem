const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const CourseController = require('../controllers/courseController')
const RegisterController = require('../controllers/registerController')


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

//Course Registration API

//Get my Courses Method
router.get('/getMyCourses/:studentid', RegisterController.my_courses)

//Register for a course 
router.post('/register/:studentid/:courseid', RegisterController.register)

//Deregister from a course
router.delete('/deregister/:studentid/:courseid', RegisterController.deregister)

module.exports = router;