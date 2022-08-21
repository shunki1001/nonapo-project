import { Button, Typography } from "@mui/material";
import React from "react";

const GoogleCalendarChoice = (props) => {
  const handleClick = () => {
    console.log("GoogleCalendar同期ボタンクリック");
    props.setGoogleDialog(true);
  };
  return (
    <>
      <Typography variant="caption" sx={{ display: "block" }}>
        ※カレンダーの空き状況で対応する場合、下記からカレンダーの同期をお願いします。
      </Typography>
      <Button onClick={handleClick} varinat="outlined">
        <img
          src="https://img.icons8.com/color/48/000000/google-calendar--v2.png"
          alt="googleCalendar logo"
        />
        Googleカレンダーの空き日時を同期
      </Button>
    </>
  );
};

export default GoogleCalendarChoice;
