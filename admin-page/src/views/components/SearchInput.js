import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <TextField id="input-search" label="検索" variant="standard" />
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
    </Box>
  );
};

export default SearchInput;
