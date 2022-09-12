import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const NameInput = () => {
  const { username, setUsername,error,setError } = useContext(DataContext);
  
  const handleBlur = (e)=>{
    if(!(e.target.value)){
      setError({...error, username:true,firstRender:false})
    }else {
      setError({...error, username:false,firstRender:false})
    }
  }
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">お名前（商談対応者）</Typography>
      <TextField
        value={username}
        onChange={async (e) => {
          setUsername(e.target.value);
        }}
        error={error.username}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default NameInput;
