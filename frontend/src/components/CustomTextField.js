import { InputLabel, TextField } from "@mui/material";
import React from "react";

function CustomTextField({
  required,
  label,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      {" "}
      <InputLabel sx={{ mb: "5px" }}>{label}</InputLabel>
      <TextField
        type={type}
        value={value}
        required={required}
        fullWidth
        placeholder={placeholder}
        onChange={onChange}
        variant="outlined"
        sx={{ bgcolor: "primary.light" }}
      />
    </>
  );
}

export default CustomTextField;
