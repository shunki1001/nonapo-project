import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
  const { label, width, name, register, errors, placeholder } = props;
  return (
    <Box sx={{ mt: 5 }}>
      <Typography>{label}</Typography>
      <TextField
        name={name}
        placeholder={placeholder}
        error={name in errors}
        helperText={errors[name]?.message}
        {...register(name)}
        sx={{
          width: width,
          "& p": {
            color: "green",
            position: "absolute",
            bottom: "-2em",
          },
        }}
      />
    </Box>
  );
};

export default CustomTextField;
