import { Box, Button, Grid, Radio, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";
import DateChoice from "./DateChoice";
import GoogleCalendarChoice from "./GoogleCalendarChoice";
import CircleIcon from "@mui/icons-material/Circle";
import radioIcon from "../../../../img/radioIcon.svg";

// Todo: Timepicker で入力の制限
const ScheduleInput = (props) => {
  const { isGoogleCalendar, setIsGoogleCalendar } = useContext(DataContext);
  const { endTime, setEndTime, startTime, setStartTime } =
    useContext(DataContext);
  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Typography variant="h6">商談可能な曜日/時間帯</Typography>
      <Box>
        <Radio
          checked={isGoogleCalendar === true}
          onChange={(e) => setIsGoogleCalendar(true)}
          name="a-radio"
          icon={
            <img
              src={radioIcon}
              alt="checked"
              style={{
                width: "1em",
                fontSize: "1.5rem",
              }}
            />
          }
          checkedIcon={
            <>
              <img
                src={radioIcon}
                alt="checked"
                style={{
                  position: "absolute",
                  width: "1em",
                  fontSize: "1.5rem",
                }}
              />
              <CircleIcon
                fontSize="small"
                sx={{
                  color: "#5E72E4",
                  position: "relative",
                }}
              />
            </>
          }
        />
        <Typography sx={{ display: "inline-block", fontWeight: 700 }}>
          Googleカレンダー連携
        </Typography>
        <Radio
          checked={isGoogleCalendar === false}
          onChange={(e) => setIsGoogleCalendar(false)}
          name="b-radio"
          icon={
            <img
              src={radioIcon}
              alt="checked"
              style={{
                width: "1em",
                fontSize: "1.5rem",
              }}
            />
          }
          checkedIcon={
            <>
              <img
                src={radioIcon}
                alt="checked"
                style={{
                  position: "absolute",
                  width: "1em",
                  fontSize: "1.5rem",
                }}
              />
              <CircleIcon
                fontSize="small"
                sx={{
                  color: "#5E72E4",
                  position: "relative",
                }}
              />
            </>
          }
          sx={{ ml: 3 }}
        />
        <Typography sx={{ display: "inline-block", fontWeight: 700 }}>
          手動設置
        </Typography>
      </Box>
      <Box height="5em" sx={{ mb: 1 }}>
        {isGoogleCalendar ? (
          <GoogleCalendarChoice setGoogleDialog={props.setGoogleDialog} />
        ) : (
          <DateChoice />
        )}
      </Box>
      <Grid container>
        <Grid item xs={12} sm={3.5}>
          <Typography sx={{ fontWeight: 700 }}>開始時刻</Typography>
          <TextField
            fullWidth
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="10:00"
          />
        </Grid>
        <Grid item xs={12} sm={1} sx={{ mt: 5, textAlign: "center" }}>
          ～
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <Typography sx={{ fontWeight: 700 }}>終了時刻</Typography>
          <TextField
            fullWidth
            type="time"
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
            sx={{
              marginTop: "1.5em",
              ml: 4,
              px: 1,
              border: "1px solid #5e72e4",
            }}
          >
            オフライン時の
            <br />
            フォローメール設定
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScheduleInput;
