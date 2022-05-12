import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [students, setStudents] = useState([
    {
      id: nanoid(),
      name: "student1",
      email: "student1@gmail.com",
      class: 4,
    },
    {
      id: nanoid(),
      name: "student2",
      email: "student2@gmail.com",
      class: 2,
    },
    {
      id: nanoid(),
      name: "student3",
      email: "student3@gmail.com",
      class: 8,
    },
  ]);

  const getStudent = (studentId) => {
    return students.find((student) => student.id === studentId);
  };

  const addStudent = (newStudent) => {
    setStudents((students) => [...students, newStudent]);
  };

  const deleteStudent = (studentId) => {
    setStudents((students) =>
      students.filter((student) => student.id !== studentId)
    );
  };

  const editStudent = (newStudentData) => {
    setStudents((students) =>
      students.map((student) => {
        if (student.id === newStudentData.id) return newStudentData;
        return student;
      })
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        studentOps: { getStudent, addStudent, deleteStudent, editStudent },
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
