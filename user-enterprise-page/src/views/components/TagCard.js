import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import DateChoice from "./formInput/inputComponent/DateChoice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const TagCard = () => {
  const {
    accountList,
    avatar,
    account,
    isGoogleCalendar,
    dayOfWeekChoices,
    startTime,
    endTime,
  } = useContext(DataContext);

  const handleDelete = () => {
    console.log("deleteされました");
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#F8F9FE",
            borderRadius: "25px",
            boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.161)",
            p: 2,
          }}
        >
          <Box sx={{ width: "100%", display: "flex", my: 2 }}>
            <Avatar src={avatar} />
            <Box sx={{ flexGrow: 1, m: 1, fontWeight: "bold" }}>{account}</Box>
            <IconButton onClick={handleDelete}>
              <HighlightOffIcon />
            </IconButton>
          </Box>
          <Typography>商談可能な曜日/時間帯</Typography>
          {isGoogleCalendar ? (
            <>
              <img
                src="https://img.icons8.com/color/48/000000/google-calendar--v2.png"
                alt="googleCalendar logo"
              />
              <Typography>Googleカレンダーに準拠</Typography>
            </>
          ) : (
            <>
              <Box width="100%">
                <DateChoice fontSize="12px" />
              </Box>
              <Box sx={{ pl: 3, mt: 3 }}>
                {startTime}～{endTime}
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TagCard;
