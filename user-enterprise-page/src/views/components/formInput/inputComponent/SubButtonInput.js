import {
  Box,
  Divider,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../contexts/DataContext";
import CircleIcon from "@mui/icons-material/Circle";
import radioIcon from "../../../../img/radioIcon.svg";

const placeholder = [
  {
    title: "まずは資料請求",
    url: "https://example.com/document",
  },
  {
    title: "よくある質問",
    url: "https://example.com/help",
  },
  {
    title: "サービスの紹介動画",
    url: "https://example.com/youtube",
  },
  {
    title: "デモ・体験版",
    url: "https://example.com/demo",
  },
];

const SubButtonInput = () => {
  const {
    isOneSubButton,
    setIsOneSubButton,
    subButtonTitle,
    setSubButtonTitle,
    subButtonList,
    setSubButtonList,
  } = useContext(DataContext);

  // const [multiSubButton, setMultiSubButton] = useState([]);
  // const [onlySubButton, setOnlySubButton] = useState({});

  const [renderList, setRenderList] = useState([]);

  // useEffect(() => {
  //   setOnlySubButton(subButtonList.filter((item) => item.isOnly === true)[0]);
  //   setMultiSubButton(subButtonList.filter((item) => item.isOnly === false));
  // }, [subButtonList]);
  useEffect(() => {
    setRenderList(
      subButtonList.filter((item) => {
        return item.isOnly === isOneSubButton;
      })
    );
  }, [isOneSubButton, subButtonList]);

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Radio
          checked={isOneSubButton === true}
          onChange={(e) => setIsOneSubButton(true)}
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
          サブボタンをつける（任意）
        </Typography>
        <Radio
          checked={isOneSubButton === false}
          onChange={(e) => setIsOneSubButton(false)}
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
        />
        <Typography sx={{ display: "inline-block", fontWeight: 700 }}>
          サブボタンを複数つける（任意）
        </Typography>
      </Box>
      <Box>
        {!isOneSubButton && (
          <>
            <Typography sx={{ fontWeight: 700 }}>ボタンタイトル</Typography>
            <TextField
              value={subButtonTitle}
              onChange={(e) => setSubButtonTitle(e.target.value)}
              placeholder="ヘルプ・その他"
            />
            <Box sx={{ display: "inline-block", mt: 2 }}>
              <Typography variant="caption" sx={{ ml: 3 }}>
                左記ボタンが先頭表示されその後下記ボタンが選択肢となります。
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
          </>
        )}
        <Grid container>
          {renderList.map((item, index) => {
            return (
              <Grid item container xs={12} sm={12} key={item.id}>
                <Grid item xs={12} sm={5} sx={{ my: 1 }}>
                  <Typography sx={{ fontWeight: 700 }}>
                    {isOneSubButton ? (
                      <>ボタンタイトル（最大10文字）</>
                    ) : (
                      <>ボタンタイトル{index + 1}（最大12文字）</>
                    )}
                  </Typography>
                  <TextField
                    sx={{ width: "90%" }}
                    value={item.title}
                    placeholder={placeholder[index].title}
                    onChange={(e) => {
                      setRenderList(
                        renderList.map((element, selectIndex) => {
                          if (selectIndex === index) {
                            return { ...element, title: e.target.value };
                          } else {
                            return { ...element };
                          }
                        })
                      );
                      setSubButtonList(
                        subButtonList.map((element) => {
                          if (element.id === item.id) {
                            return { ...element, title: e.target.value };
                          } else {
                            return { ...element };
                          }
                        })
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={7} sx={{ my: 1 }}>
                  <Typography sx={{ fontWeight: 700 }}>遷移先URL</Typography>
                  <TextField
                    sx={{ width: "90%" }}
                    value={item.url}
                    placeholder={placeholder[index].url}
                    onChange={(e) => {
                      setRenderList(
                        renderList.map((element, selectIndex) => {
                          if (selectIndex === index) {
                            return { ...element, url: e.target.value };
                          } else {
                            return { ...element };
                          }
                        })
                      );
                      setSubButtonList(
                        subButtonList.map((element) => {
                          if (element.id === item.id) {
                            return { ...element, url: e.target.value };
                          } else {
                            return { ...element };
                          }
                        })
                      );
                    }}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        {/* {isOneSubButton === true ? (
          <Grid container>
            <Grid item xs={12} sm={5} sx={{ my: 1 }}>
              <Typography>ボタンタイトル（最大10文字）</Typography>
              <TextField
                sx={{ width: "90%" }}
                value={onlySubButton}
                onChange={(e) => {
                  setOnlySubButton({ ...onlySubButton, title: e.target.value });
                  setMultiSubButton(
                    multiSubButton.map((item) => {
                      if (onlySubButton.id === item.id) {
                        return { ...item, title: e.target.value };
                      } else {
                        return {
                          ...item,
                        };
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
                value={onlySubButton}
                onChange={(e) => {
                  setOnlySubButton({ ...onlySubButton, utl: e.target.value });
                  setMultiSubButton(
                    multiSubButton.map((item) => {
                      if (onlySubButton.id === item.id) {
                        return { ...item, url: e.target.value };
                      } else {
                        return {
                          ...item,
                        };
                      }
                    })
                  );
                }}
              />
            </Grid>
          </Grid>
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
        )} */}
      </Box>
    </>
  );
};

export default SubButtonInput;
