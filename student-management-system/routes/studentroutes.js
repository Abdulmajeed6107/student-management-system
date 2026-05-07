const express = require('express');

const router = express.Router();

// importing the student controller 
const {addStudent,getAllStudents, getStudentById, UpdateStudent, DeleteStudent} = require('../controllers/studentcontroller');

//defining the router
router.post('/add', addStudent);

// getting all data 
router.get('/allstudents', getAllStudents)

// route of getting student by id 
router.get('/getstudent/:id', getStudentById)

// update user 
router.put('/update/:id', UpdateStudent)

// delete user 
router.delete('/delete/:id', DeleteStudent)

module.exports = router;