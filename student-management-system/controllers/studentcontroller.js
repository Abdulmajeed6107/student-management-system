// const student = require('../models/student');
const Student = require('../models/student');

// creating api for student data 
const addStudent = async (req, res) => {
    try {
        // getting data from user for each column/field 
        const { name, email, course, city, marks } = req.body;

        //validation the data before saving 
        if (!name || !email || !course || !city || !marks) {
            return res.status(400).json({
                success: false,
                message: 'please provide all required fields'
            });
        }
        // if user enter all the fields then save data into database 
        const student = await Student.create({ name, email, course, city, marks })

        //getting success status 
        res.status(200).json({
            success: true,
            message: 'student data created successfully',
            data: student

        })
    } catch (error) {
        console.log(error);
    }
}
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            status: true,
            message: 'All students fetched successfully',

            // for finding total length of all data 
            count: students.length,

            // displaying all the data 
            data: students,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message
        })
    }

}

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'student not found',

            })
        }
        res.status(200).json({
            success: true,
            message: 'here is student data',
            data: student,
        })
    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid Id format',
            })
            res.status(500).json({
                success: false,
                message: 'server error'
            })
        }
    }
}

const UpdateStudent = async (req, res) => {
    try {
        const { name, email, course, city, marks } = req.body;

        if (!name || !email || !course || !city || !marks === undefined) {

            return res.status(400).json({
                status: false,
                message: 'please provide the required fields'
            })
        }

        const updateData = {}

        updateData.name = name;
        updateData.email = email;
        updateData.course = course
        updateData.marks = marks;
        updateData.city = city;

        const student = await Student.findByIdAndUpdate(
            req.params.id, updateData,
        )
        if (!student) {
            return res.status(400).json({
                success: false,
                message: 'student not found !'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'data updated successfully',
            data: updateData,
        })



    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid Id format',
            })
            res.status(500).json({
                success: false,
                message: 'server error'
            })
        }
    }
}

// api for deleting the student data 
const DeleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            status: true,
            message: 'user deleted successfully'
        })

    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid Id format',
            })
            res.status(500).json({
                success: false,
                message: 'server error'
            })
        }
    }
}


module.exports = { addStudent, getAllStudents, getStudentById, UpdateStudent, DeleteStudent };