import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TeacherContext } from "../../Context/TeacherContext";

// components
import AddTeacher from "./AddTeacher";
import EditTeacher from "./EditTeacher";
import TableDisplay from "../TableDisplay";
import DeleteForm from "../DeleteForm";

const Teacher = () => {
  const { teachers, teacherOps } = useContext(TeacherContext);
  const { getTeacher, addTeacher, deleteTeacher, editTeacher } = teacherOps;

  return (
    <Routes>
      <Route
        path="all"
        element={<TableDisplay tableType="teacher" tableData={teachers} />}
      />
      <Route path="add" element={<AddTeacher addTeacher={addTeacher} />} />
      <Route
        path="edit/:id"
        element={
          <EditTeacher getTeacher={getTeacher} editTeacher={editTeacher} />
        }
      />
      <Route
        path="delete/:id"
        element={
          <DeleteForm
            getData={getTeacher}
            deleteUser={deleteTeacher}
            formType="teacher"
          />
        }
      />
      <Route path="*" element={<Navigate to={"/teacher/all"} />} />
    </Routes>
  );
};

export default Teacher;
