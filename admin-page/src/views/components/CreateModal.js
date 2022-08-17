import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CreateModal = (props) => {
  const { newOpen, setNewOpen } = props;

  const [isAgreement, setIsAgreement] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"));
    setNewOpen(false);
  };
  return (
    <Dialog
      open={newOpen}
      onClose={() => setNewOpen(false)}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& .MuiDialog-paper": { zIndex: "2000" },
      }}
    >
      <DialogTitle>新規追加</DialogTitle>
      <DialogContent sx={{ "& div": { my: 1 } }}>
        <TextField
          autoFocus
          required
          margin="dense"
          id="enterprise"
          name="enterprise"
          label="企業名"
          type="text"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="email"
          name="email"
          label="Eメール"
          type="email"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="password"
          name="password"
          label="パスワード"
          type="password"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="address"
          name="address"
          label="住所"
          type="text"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="numberOfSite"
          name="numberOfSite"
          label="設置するサイト数"
          type="number"
          fullWidth
          variant="filled"
        />
        <DialogContentText>契約開始月</DialogContentText>
        <TextField
          required
          margin="dense"
          id="AgreementStartYear"
          name="AgreementStartYear"
          label="年"
          type="number"
          variant="filled"
        />
        <Typography
          variant="body"
          sx={{ display: "inline-block", mt: 3, mr: 2 }}
        >
          年
        </Typography>
        <TextField
          required
          margin="dense"
          id="AgreementStartMonth"
          name="AgreementStartMonth"
          label="月"
          type="number"
          variant="filled"
        />
        <Typography variant="body" sx={{ display: "inline-block", mt: 3 }}>
          月
        </Typography>
        <TextField
          required
          margin="dense"
          id="numberOfAccount"
          name="numberOfAccount"
          label="アカウント数"
          type="number"
          fullWidth
          variant="filled"
        />
        <TextField
          required
          margin="dense"
          id="AgreementDuration"
          name="AgreementDuration"
          label="契約期間"
          type="number"
          variant="filled"
        />
        <Typography variant="body" sx={{ display: "inline-block", mt: 3 }}>
          ヶ月
        </Typography>
        <InputLabel id="select-label">ステータス</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={isAgreement}
          label="ステータス"
          onChange={(e) => setIsAgreement(e.target.value)}
        >
          <MenuItem value={true}>契約中</MenuItem>
          <MenuItem value={false}>解約中</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setNewOpen(false)}>CANCEL</Button>
        <Button type="submit">SAVE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModal;
