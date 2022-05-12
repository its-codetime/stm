import InputForm from "../InputForm";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent({ editStudent, getStudent }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const formData = getStudent(id);
  const formUtils = {
    formName: "Update Student",
    submitName: "Update Student",
    onSubmit: (newStudentData) => {
      editStudent(newStudentData);
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
