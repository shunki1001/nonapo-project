import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const SiteSelect = (props) => {
  const { userSite } = useContext(DataContext);

  const handleClick = () => {
    props.setSiteOpen(true);
  };
  return (
    <>
      {/* <InputLabel id="site-select-label" sx={{ color: "white" }}>
        サイト名
      </InputLabel> */}
      {/* <Select
        id="site-select"
        value={userSite}
        sx={{
          maxWidth: "350px",
          "& .MuiSelect-select": {
            backgroundColor: "white",
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        }}
        onChange={(e) => setUserSite(e.target.value)}
      >
        {userSiteList.map((item) => {
          return (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select> */}
      <TextField
        value={userSite}
        disabled
        sx={{ borderRadius: "5px" }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick} sx={{ pr: 0 }}>
                <ArrowRightIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SiteSelect;
