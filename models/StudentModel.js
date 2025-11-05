import pool from './db.js';

export const getStudents = async () => {
    const[rows] = await pool.query("SELECT * FROM tblstudents");
    return rows;
}

export const insertStudents = async (srcode, name, course) => {
    const [result] = await pool.query(
        "INSERT INTO tblstudents(srcode, name, course) VALUES(?,?,?)",
        [srcode, name, course]
    );
    return result.insertId;
}

export const updateStudents = async (srcode, name, course, studentsId) =>{
    const [result] = await pool.query(
        "UPDATE tblstudents SET srcode= ?, name= ?, course= ? WHERE id= ?",
        [srcode, name, course, studentsId]
    );
    return result.affectedRows;
}

export const deleteStudents = async (studentsId) =>{
    const [result] = await pool.query(
        "DELETE FROM tblstudents WHERE id= ?", [studentsId]
    );
    return result.affectedRows;
}