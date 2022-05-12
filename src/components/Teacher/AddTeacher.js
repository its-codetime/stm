import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import InputForm from "../InputForm";

export default function AddTeacher({ addTeacher }) {
  const navigate = useNavigate();
  const formData = { name: "", email: "", subject: "" };
  const formUtils = {
    formName: "Add Teacher",
    submitName: "Add Teacher",
    onSubmit: (newTeacher) => {
      newTeacher.id = nanoid();
      addTeacher(newTeacher);
      navigate("/teacher/all");
    },
    onCancel: () => {
      navigate("/teacher/all");
    },
  };

  return (
    <>
      <InputForm
        formType={"teacher"}
        formData={formData}
        formUtils={formUtils}
      />
    </>
  );
}
