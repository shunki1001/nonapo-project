import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const CompanyInput = () => {
  const { company, setCompany,error,setError } = useContext(DataContext);
  const handleBlur = (e)=>{
    if(!(e.target.value)){
      setError({...error, company:true})
    }else {
      setError({...error, company:false})
    }
  }
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">会社名</Typography>
      <TextField
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        fullWidth
        error={error.username}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default CompanyInput;
