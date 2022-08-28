import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const NameInput = () => {
  const { username, setUsername } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">お名前（商談対応者）</Typography>
      <TextField
        value={username}
        onChange={async (e) => {
          setUsername(e.target.value);
        }}
      />
    </Box>
  );
};

export default NameInput;
