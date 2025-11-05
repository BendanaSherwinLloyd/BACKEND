import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) =>{
    try{
        const students = await StudentModel.getStudents();
        res.status(200).json({success: true, message: students});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudents = async (req, res) =>{
    const {srcode, name, course} = req.body
    try{
        const studentsId = await StudentModel.insertStudents(srcode, name, course);
        res.status(200).json({success : true, message : studentsId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const editStudents = async (req, res) =>{
    const {srcode, name, course} = req.body;
    const {studentsId} = req.params

    try{
        const updateId = await StudentModel.updateStudents(srcode, name, course, studentsId);
        res.status(200).json({success: true, message: updateId});
    }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const deleteStudents = async (req, res) =>{
    const {studentsId} = req.params;
    console.log(studentsId);

    try{
        const deleteId = await StudentModel.deleteStudents(studentsId);
        res.status(200).json({success: true, message: deleteId});
    }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}