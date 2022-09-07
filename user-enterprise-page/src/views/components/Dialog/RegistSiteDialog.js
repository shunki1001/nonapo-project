import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";
import registSite from "../../../functions/registSite";
import SiteRadio from "../formInput/SiteRadio";

const RegistSiteDialog = () => {
  const { numberOfSite, userSiteList, setUserSiteList, userSite } =
    useContext(DataContext);
  const [open, setOpen] = useState(true);
  const [addingSite, setAddingSite] = useState("");

  const renderingRef = useRef(false);
  useEffect(() => {
    if (renderingRef.current === false) {
      renderingRef.current = true;
    } else {
      if (userSiteList.length === 0) {
        setOpen(true);
      }
    }
  }, [userSiteList]);

  const handleAddClick = () => {
    setUserSiteList([...userSiteList, addingSite]);
  };
  const handleClickDialog = () => {
    registSite(userSiteList);
    setOpen(false);
  };
  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogContent sx={{ mx: 2 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">
            ノンアポを設置するサイトを追加してください
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#5E72E4" }}>
            ※お客様のプランで登録できるサイトは{numberOfSite}つです
          </Typography>
        </Box>
        {userSiteList.length === 0 ? (
          <Typography sx={{ fontSize: "14px", color: "#CE1212", my: 5 }}>
            選択肢がありません。下記から設置するサイトのURLを入力してください。
          </Typography>
        ) : (
          <SiteRadio />
        )}
        <Divider sx={{ my: 3 }} />
        <TextField
          autoFocus
          margin="dense"
          label="サイトURL"
          type="text"
          variant="standard"
          sx={{ width: "60%", boxShadow: "none" }}
          value={addingSite}
          onChange={(e) => {
            setAddingSite(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: 2, ml: 3 }}
          onClick={handleAddClick}
          disabled={numberOfSite < userSiteList.length + 1 || addingSite === ""}
        >
          追加
        </Button>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => setOpen(false)}
          disabled={userSite === ""}
          variant="outlined"
          sx={{ mx: 3 }}
        >
          キャンセル
        </Button>
        <Button
          onClick={() => handleClickDialog()}
          disabled={userSite === ""}
          variant="contained"
          sx={{ mx: 3 }}
        >
          このサイトに設置
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegistSiteDialog;
