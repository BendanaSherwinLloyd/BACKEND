import * as StudentController from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudents);
studentRoutes.put('/edit/:studentsId', StudentController.editStudents);
studentRoutes.delete('/delete/:studentsId', StudentController.deleteStudents);

export default studentRoutes;