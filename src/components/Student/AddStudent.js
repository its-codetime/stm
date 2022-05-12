import InputForm from "../InputForm";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export default function AddStudent({ addStudent }) {
  const navigate = useNavigate();
  const formData = { name: "", email: "", class: "" };
  const formUtils = {
    formName: "Add Student",
    submitName: "Add Student",
    onSubmit: (newStudent) => {
      newStudent.id = nanoid();
      addStudent(newStudent);
      navigate("/student/all");
    },
    onCancel: () => {
      navigate("/student/all");
    },
  };

  return (
    <>
      <InputForm
        formType={"student"}
        formData={formData}
        formUtils={formUtils}
      />
    </>
  );
}
