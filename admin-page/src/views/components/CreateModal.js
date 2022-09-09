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
import addData from "../../function/addData";
import editData from "../../function/editData";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
// import validation from "../../function/validation";

const CreateModal = (props) => {
  const { newOpen, setNewOpen, newData, setNewData } = props;
  const [inputError, setInputError] = useState({
    enterprise: false,
    email: false,
    password: false,
    address: false,
    numberOfSite: false,
    domain: false,
    numberOfAccount: false,
    subscriptionCost: false,
    subscriptionDuration: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // // すべてのエラーキーがfalseなら登録実行
    // if (!Object.values(inputError).includes(true)) {
    // 新規作成時
    if (newData.id === undefined) {
      let userList = [];
      const docRef = await getDocs(
        query(collection(db, "enterprise"), where("email", "==", newData.email))
      );
      docRef.forEach((item) => {
        userList.push(item.data());
      });
      if (userList.length > 1) {
        alert("すでに登録済みのアカウントです");
      } else {
        try {
          addData(newData);
        } catch (e) {
          alert("Cannnot add! Try again");
          console.error("Error adding document: ", e);
        }
      }
    } else {
      // 編集時
      try {
        editData(newData);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    setNewOpen(false);
    // }
  };

  return (
    <Dialog
      open={newOpen}
      onClose={() => setNewOpen(false)}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        "& .MuiDialog-paper": { zIndex: "2000" },
      }}
    >
      <DialogTitle id="scroll-dialog-title">新規追加</DialogTitle>
      <DialogContent sx={{ "& div": { my: 1 } }} id="scroll-dialog-description">
        <TextField
          autoFocus
          required
          margin="dense"
          id="enterprise"
          label="企業名"
          type="text"
          fullWidth
          variant="filled"
          error={inputError.enterprise}
          value={newData.enterprise}
          onChange={(e) =>
            setNewData({ ...newData, enterprise: e.target.value })
          }
          sx={{
            "& label": { mt: 1 },
          }}
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
          error={inputError.email}
          value={newData.email}
          onChange={(e) => setNewData({ ...newData, email: e.target.value })}
          sx={{ "& label": { mt: 1 } }}
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
          error={inputError.password}
          value={newData.password}
          onChange={(e) => setNewData({ ...newData, password: e.target.value })}
          sx={{ "& label": { mt: 1 } }}
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
          error={inputError.address}
          value={newData.address}
          onChange={(e) => setNewData({ ...newData, address: e.target.value })}
          sx={{ "& label": { mt: 1 } }}
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
          error={inputError.numberOfSite}
          value={newData.numberOfSite}
          onChange={(e) =>
            setNewData({ ...newData, numberOfSite: e.target.value })
          }
          sx={{ "& label": { mt: 1 } }}
        />
        {/* <TextField
          required
          margin="dense"
          id="privacyPolicy"
          name="privacyPolicy"
          label="プライバシーポリシーURL"
          type="text"
          fullWidth
          variant="filled"
          value={newData.privacyPolicy}
          onChange={(e) =>
            setNewData({ ...newData, privacyPolicy: e.target.value })
          }
        sx={{ "& label": { mt: 1 },}} />  */}
        <TextField
          required
          margin="dense"
          id="domain"
          name="domain"
          label="MTG URL(サードレベルドメイン)"
          type="text"
          fullWidth
          variant="filled"
          error={inputError.domain}
          value={newData.domain}
          onChange={(e) => setNewData({ ...newData, domain: e.target.value })}
          sx={{ "& label": { mt: 1 } }}
        />
        <DialogContentText>契約開始月</DialogContentText>
        <TextField
          required
          margin="dense"
          id="subscriptionStartYear"
          name="subscriptionStartYear"
          label="年"
          type="number"
          variant="filled"
          value={newData.subscriptionStartYear}
          onChange={(e) =>
            setNewData({ ...newData, subscriptionStartYear: e.target.value })
          }
          sx={{ "& label": { mt: 1 } }}
        />
        <Typography
          variant="body"
          sx={{ display: "inline-block", mt: 4, mr: 2 }}
        >
          年
        </Typography>
        <TextField
          required
          margin="dense"
          id="subscriptionStartMonth"
          name="subscriptionStartMonth"
          label="月"
          type="number"
          variant="filled"
          value={newData.subscriptionStartMonth}
          onChange={(e) =>
            setNewData({ ...newData, subscriptionStartMonth: e.target.value })
          }
          sx={{ "& label": { mt: 1 } }}
        />
        <Typography variant="body" sx={{ display: "inline-block", mt: 4 }}>
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
          error={inputError.numberOfAccount}
          value={newData.numberOfAccount}
          onChange={(e) =>
            setNewData({ ...newData, numberOfAccount: e.target.value })
          }
          sx={{ "& label": { mt: 1 } }}
        />
        <TextField
          required
          fullWidth
          margin="dense"
          id="subscriptionCost"
          name="subscriptionCost"
          label="月額"
          variant="filled"
          error={inputError.subscriptionCost}
          value={newData.subscriptionCost}
          onChange={(e) =>
            setNewData({ ...newData, subscriptionCost: e.target.value })
          }
          sx={{ "& label": { mt: 1 } }}
        />
        <TextField
          required
          margin="dense"
          id="subscriptionDuration"
          name="subscriptionDuration"
          label="契約期間"
          type="number"
          variant="filled"
          error={inputError.subscriptionDuration}
          value={newData.subscriptionDuration}
          onChange={(e) =>
            setNewData({ ...newData, subscriptionDuration: e.target.value })
          }
          sx={{ "& label": { mt: 1 }, width: "80%" }}
        />
        <Typography variant="body" sx={{ display: "inline-block", mt: 4 }}>
          ヶ月
        </Typography>
        <InputLabel id="select-label">ステータス</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={newData.isAgreement}
          label="ステータス"
          onChange={(e) => {
            setNewData({ ...newData, isAgreement: e.target.value });
          }}
        >
          <MenuItem value={true}>契約中</MenuItem>
          <MenuItem value={false}>解約中</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setNewOpen(false)}>CANCEL</Button>
        <Button onClick={handleSubmit}>SAVE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModal;
