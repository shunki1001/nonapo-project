import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const CompanyInput = () => {
  const { company, setCompany } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">会社名</Typography>
      <TextField
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default CompanyInput;
