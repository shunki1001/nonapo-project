import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateChoiceCard from "./DateChoiceCard";

const TagCard = (props) => {
  const {
    avatar,
    username,
    isGoogleCalendar,
    dayOfWeekChoices,
    startTime,
    endTime,
  } = props;

  const handleDelete = () => {
    console.log("deleteされました");
  };
  return (
    <Grid item xs={12} sm={6}>
      <Box
        sx={{
          height: "230px",
          bgcolor: "#F8F9FE",
          borderRadius: "25px",
          boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.161)",
          p: 2,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", my: 2 }}>
          <Avatar src={avatar} />
          <Box sx={{ flexGrow: 1, m: 1, fontWeight: "bold" }}>{username}</Box>
          <IconButton onClick={handleDelete}>
            <HighlightOffIcon />
          </IconButton>
        </Box>
        <Typography>商談可能な曜日/時間帯</Typography>
        {isGoogleCalendar ? (
          <Box>
            <img
              src="https://img.icons8.com/color/48/000000/google-calendar--v2.png"
              alt="googleCalendar logo"
            />
            <Typography>Googleカレンダーに準拠</Typography>
          </Box>
        ) : (
          <Box>
            <Box width="100%">
              <DateChoiceCard
                fontSize="10px"
                dayOfWeekChoices={dayOfWeekChoices}
              />
            </Box>
            <Box sx={{ pl: 3, mt: 3 }}>
              {startTime}～{endTime}
            </Box>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default TagCard;
