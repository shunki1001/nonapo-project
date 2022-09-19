import React from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Complete = () => {
  const { appointmentUrl, whereFrom } = useContext(DataContext);
  return (
    <div className="image-container set-full-height">
      <Dialog
        open={true}
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            width: "80vw",
            height: "70vh",
          },
        }}
      >
        <DialogContent sx={{ textAlign: "center", pt: 10 }}>
          <Typography variant="h4" sx={{ mt: 10 }}>
            商談用のURLを発行しました。
          </Typography>
          <Typography variant="h4" sx={{ mb: 10 }}>
            下記URLからアクセスお願い致します。
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                my: 3,
                width: "70%",
                height: "7em",
                textTransform: "none",
                borderRadius: "10px",
              }}
              onClick={() => (window.location.href = appointmentUrl)}
            >
              {appointmentUrl}
            </Button>
          </Box>
          <Box>
            <Button
              fullWidth
              sx={{ my: 3, textDecoration: "underline", fontSize: "35px" }}
              onClick={() => (window.location.href = `https://${whereFrom}`)}
            >
              元のページへ戻る
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Complete;
