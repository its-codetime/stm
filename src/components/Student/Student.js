import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { StudentContext } from "../../Context/StudentContext";

// components
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import TableDisplay from "../TableDisplay";
import DeleteForm from "../DeleteForm";

const Student = () => {
  const { students, studentOps } = useContext(StudentContext);
  const { getStudent, addStudent, deleteStudent, editStudent } = studentOps;

  return (
    <>
      <Routes>
        <Route
          path="all"
          element={<TableDisplay tableType="student" tableData={students} />}
        />
        <Route path="add" element={<AddStudent addStudent={addStudent} />} />
        <Route
          path="edit/:id"
          element={
            <EditStudent getStudent={getStudent} editStudent={editStudent} />
          }
        />
        <Route
          path="delete/:id"
          element={
            <DeleteForm
              getData={getStudent}
              deleteUser={deleteStudent}
              formType="student"
            />
          }
        />
        <Route path="*" element={<Navigate to="all" />} />
      </Routes>
    </>
  );
};

export default Student;
