import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const TeacherContext = createContext();

const TeacherContextProvider = (props) => {
  const [teachers, setTeachers] = useState([
    {
      id: nanoid(),
      name: "teacher1",
      email: "teacher1@gmail.com",
      subject: "Maths",
    },
    {
      id: nanoid(),
      name: "teacher2",
      email: "teacher2@gmail.com",
      subject: "Science",
    },
    {
      id: nanoid(),
      name: "teacher3",
      email: "teacher3@gmail.com",
      subject: "English",
    },
  ]);

  const getTeacher = (teacherId) => {
    return teachers.find((teacher) => teacher.id === teacherId);
  };

  const addTeacher = (newTeacher) => {
    setTeachers((teachers) => [...teachers, newTeacher]);
  };

  const deleteTeacher = (teacherId) => {
    setTeachers((teachers) =>
      teachers.filter((teacher) => teacher.id !== teacherId)
    );
  };

  const editTeacher = (newTeacherData) => {
    setTeachers((teachers) =>
      teachers.map((teacher) => {
        if (teacher.id === newTeacherData.id) return newTeacherData;
        return teacher;
      })
    );
  };

  return (
    <TeacherContext.Provider
      value={{
        teachers: teachers,
        teacherOps: { getTeacher, addTeacher, deleteTeacher, editTeacher },
      }}
    >
      {props.children}
    </TeacherContext.Provider>
  );
};

export default TeacherContextProvider;
