import InputForm from "../InputForm";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTeacher({ editTeacher, getTeacher }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const formData = getTeacher(id);
  const formUtils = {
    formName: "Update Teacher",
    submitName: "Update Teacher",
    onSubmit: (newTeacherData) => {
      editTeacher(newTeacherData);
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
