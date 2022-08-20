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
          "& .MuiSelect-select": {
            backgroundColor: "white",
            paddingTop: "5px",
            paddingBottom: "5px",
          },
        }}
        onChange={(e) => setUserSite(e.target.value)}>
        {userSiteList.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </>
  );
};

export default SiteSelect;
