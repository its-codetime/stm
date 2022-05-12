import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteForm({ getData, deleteUser, formType }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = getData(id);
  return (
    <>
      <Stack
        sx={{ textAlign: "center", maxWidth: 400, margin: "0 auto" }}
        spacing={2}
      >
        <Typography variant="h6">
          Are you sure you want to delete {formType} with name
          <Box component="span" sx={{ color: "red" }}>
            {" " + userData.name + " "}
          </Box>
          and email
          <Box component="span" sx={{ color: "red" }}>
            {" " + userData.email}
          </Box>
          ?
        </Typography>
        <Button
          onClick={() => {
            deleteUser(userData.id);
            navigate(`/${formType}/all`);
          }}
          variant="contained"
        >
          Yes, Go Ahead
        </Button>
        <Button
          onClick={() => {
            navigate(`/${formType}/all`);
          }}
          variant="contained"
        >
          Cancel
        </Button>
      </Stack>
    </>
  );
}
