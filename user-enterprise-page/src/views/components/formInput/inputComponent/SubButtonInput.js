import {
  Box,
  Divider,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../../contexts/DataContext";
import SubButttonCard from "./SubButttonCard";

const SubButtonInput = () => {
  const {
    isOneSubButton,
    setIsOneSubButton,
    onlySubButton,
    setOnlySubButton,
    subButtonTitle,
    setSubButtonTitle,
    multiSubButton,
    setMultiSubButton,
  } = useContext(DataContext);

  useEffect(() => {
    console.log(multiSubButton);
  }, [multiSubButton]);

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Radio
          checked={isOneSubButton === true}
          onChange={(e) => setIsOneSubButton(true)}
          name="a-radio"
        />
        <Typography sx={{ display: "inline-block" }}>
          サブボタンをつける（任意）
        </Typography>
        <Radio
          checked={isOneSubButton === false}
          onChange={(e) => setIsOneSubButton(false)}
          name="b-radio"
        />
        <Typography sx={{ display: "inline-block" }}>
          サブボタンを複数つける（任意）
        </Typography>
      </Box>
      <Box>
        {isOneSubButton !== null &&
          (isOneSubButton === true ? (
            <SubButttonCard item={onlySubButton} setItem={setOnlySubButton} />
          ) : (
            <>
              <Typography>ボタンタイトル</Typography>
              <TextField
                value={subButtonTitle}
                onChange={(e) => setSubButtonTitle(e.target.value)}
              />
              <Divider sx={{ my: 2 }} />
              <Grid container>
                {multiSubButton.map((item, selecetIndex) => {
                  return (
                    <>
                      <Grid item xs={12} sm={5} sx={{ my: 1 }}>
                        <Typography>ボタンタイトル（最大10文字）</Typography>
                        <TextField
                          sx={{ width: "90%" }}
                          value={item.title}
                          onChange={(e) => {
                            setMultiSubButton(
                              multiSubButton.map((item, index) => {
                                if (selecetIndex === index) {
                                  return { ...item, title: e.target.value };
                                } else {
                                  return { ...item };
                                }
                              })
                            );
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={7} sx={{ my: 1 }}>
                        <Typography>遷移URL</Typography>
                        <TextField
                          sx={{ width: "90%" }}
                          value={item.url}
                          onChange={(e) => {
                            setMultiSubButton(
                              multiSubButton.map((item, index) => {
                                if (selecetIndex === index) {
                                  return { ...item, url: e.target.value };
                                } else {
                                  return { ...item };
                                }
                              })
                            );
                          }}
                        />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </>
          ))}
      </Box>
    </>
  );
};

export default SubButtonInput;
