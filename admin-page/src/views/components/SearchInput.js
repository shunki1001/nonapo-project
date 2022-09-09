import { Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DataContext } from "../../contexts/DataContext";

const SearchInput = () => {
  const { searchValue, setSearchValue } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <TextField
        id="input-search"
        label="企業名を検索"
        variant="standard"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{ width: "40em" }}
      />
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
    </Box>
  );
};

export default SearchInput;
