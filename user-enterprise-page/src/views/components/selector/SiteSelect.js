import { MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

const SiteSelect = () => {
  const { userSite, setUserSite, userSiteList } = useContext(DataContext);
  return (
    <>
      {/* <InputLabel id="site-select-label" sx={{ color: "white" }}>
        サイト名
      </InputLabel> */}
      <Select
        labelId="site-select-label"
        id="site-select"
        value={userSite}
        label="サイト名"
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
      </Select>
    </>
  );
};

export default SiteSelect;
