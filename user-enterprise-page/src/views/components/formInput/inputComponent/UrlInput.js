import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const UrlInput = () => {
  const { url, setUrl } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">商談URL</Typography>
      <TextField
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="ZoomやteamsなどのURLを記載ください"
        sx={{ width: "80%" }}
      />
    </Box>
  );
};

export default UrlInput;
