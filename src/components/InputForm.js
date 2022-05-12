import { useState } from "react";
// mui components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function InputForm({ formData, formUtils, formType }) {
  const { formName, submitName, onSubmit, onCancel } = formUtils;
  const [userData, setUserData] = useState(formData);

  return (
    <Box
      component="form"
      sx={{
        textAlign: "center",
        maxWidth: 400,
        minWidth: 300,
        margin: "1em auto",
        background: "rgba(255,255,255,0.5)",
        padding: 4,
        boxShadow: "2px 2px 5px 1px",
        borderRadius: 2,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(userData);
      }}
      onChange={(e) => {
        setUserData((userData) => ({
          ...userData,
          [e.target.name]: e.target.value,
        }));
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h5">{formName}</Typography>
        <TextField
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          defaultValue={userData.name}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          defaultValue={userData.email}
        />
        {formType === "student" ? (
          <TextField
            required
            id="outlined-basic"
            label="Class"
            type="number"
            variant="outlined"
            inputProps={{ min: 1, max: 12 }}
            helperText="value should be 1-12"
            name="class"
            defaultValue={userData.class}
          />
        ) : (
          <TextField
            required
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            name="subject"
            defaultValue={userData.subject}
          />
        )}
        <Button type="submit" variant="contained">
          {submitName}
        </Button>
        <Button onClick={onCancel} variant="contained">
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
