import { Box, Button, Grid, Radio, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";
import DateChoice from "./DateChoice";
import GoogleCalendarChoice from "./GoogleCalendarChoice";

// Todo: Timepicker で入力の制限
const ScheduleInput = (props) => {
  const { isGoogleCalendar, setIsGoogleCalendar } = useContext(DataContext);
  const { endTime, setEndTime, startTime, setStartTime } =
    useContext(DataContext);
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6">商談可能な曜日/時間帯</Typography>
      <Box>
        <Radio
          checked={isGoogleCalendar === true}
          onChange={(e) => setIsGoogleCalendar(true)}
          name="a-radio"
        />
        <Typography sx={{ display: "inline-block" }}>
          Googleカレンダー同期
        </Typography>
        <Radio
          checked={isGoogleCalendar === false}
          onChange={(e) => setIsGoogleCalendar(false)}
          name="b-radio"
        />
        <Typography sx={{ display: "inline-block" }}>手動設置</Typography>
      </Box>
      <Box height="120px">
        {isGoogleCalendar ? (
          <GoogleCalendarChoice setGoogleDialog={props.setGoogleDialog} />
        ) : (
          <DateChoice />
        )}
      </Box>
      <Grid container>
        <Grid item xs={12} sm={3.5}>
          <Typography>開始時刻</Typography>
          <TextField
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="10:00"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{ marginTop: "2em", textAlign: "center" }}>
          ～
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <Typography>終了時刻</Typography>
          <TextField
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="17:00"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="outlined"
            onClick={() => {
              props.setMailSetting(true);
            }}
            sx={{ marginTop: "1.5em", mx: 1 }}>
            フォローメール設定
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScheduleInput;
