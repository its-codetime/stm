import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader, Main, AppBox } from "./components/StyledComponents";
import Nav from "./components/Nav";
import Teacher from "./components/Teacher/Teacher";
import Student from "./components/Student/Student";

// context
import TeacherContextProvider from "./Context/TeacherContext";
import StudentContextProvider from "./Context/StudentContext";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = (navOpen) => {
    setIsNavOpen(navOpen);
  };

  return (
    <AppBox>
      <CssBaseline />
      <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Main open={isNavOpen}>
        <DrawerHeader />
        <TeacherContextProvider>
          <StudentContextProvider>
            <Routes>
              <Route path="/teacher/*" element={<Teacher />} />
              <Route path="/student/*" element={<Student />} />
              <Route path="*" element={<Teacher />} />
            </Routes>
          </StudentContextProvider>
        </TeacherContextProvider>
      </Main>
    </AppBox>
  );
}

export default App;
