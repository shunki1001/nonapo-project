import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap.min.css";
import "../styles/ld-original.css";
import "../styles/style.css";
import "../styles/add-style.css";

import { Avatar, Button, Link, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import getInfo from "../functions/getInfo";
import { DataContext } from "../context/DataContext";
import registFromUrl from "../functions/registFromUrl";
import { animateScroll as scroller } from "react-scroll";

function IframePage() {
  // const { setDomain, firstAccount, domain } = useContext(DataContext);
  const { setWhereFrom } = useContext(DataContext);
  const [firstAccount, setFirstAccount] = useState({});
  const [helpMessageOpen, setHelpMessageOpen] = useState(false);
  const [online, setOnline] = useState(true);
  const [haveSubbutton, setHaveSubbutton] = useState(true);

  const navigate = useNavigate();
  let params = useParams();

  const domain = params.domain;
  let fromUrl = document.referrer;

  // const fromUrl = "https://sukenojo.com/";

  const scrollToTop = () => {
    console.log("clicked");
    scroller.scrollTo("scroll_down", {
      duration: 1000,
      delay: 2000,
      smooth: true,
      offset: -50,
    });
  };

  const handleNextButton = async () => {
    registFromUrl(domain, fromUrl, navigate);
  };

  useEffect(() => {
    // ドメイン取得して、isFirstアカウントの情報を取得

    getInfo(domain, fromUrl, setFirstAccount, setOnline, setHaveSubbutton);
    setWhereFrom(fromUrl);
  }, []);

  return (
    <div id="wrap">
      <main id="content" className="content">
        {/* <section className="cover-blue">
          <div className="container">
            <div className="row"></div>
          </div>
        </section> */}

        <div className="chat customize-chat" id="p2">
          <div className="chat-title chat-title-customize">
            <h1 style={{ display: "inline" }}>{firstAccount?.username}</h1>
            <br />
            {online ? (
              <>
                <span className="atn btn--shockwave is-active"></span>
                <span style={{ color: "#181b31", fontSize: "12px" }}>
                  オンライン
                </span>
              </>
            ) : (
              <>
                <span className="btn btn_shockwave passive"></span>
                <span style={{ color: "#181b31", fontSize: "12px" }}>
                  オフライン
                </span>
              </>
            )}

            <h2 style={{ display: "inline" }}>{firstAccount?.company}</h2>

            <Avatar
              sx={{
                position: "absolute",
                top: "8px",
                left: "9px",
                height: "30px",
                width: "30px",
              }}
              src={firstAccount?.avatar}
            />
          </div>
          <div className="messages">
            <div className="messages-content scroll">
              <div className="message new">
                <figure className="avatar">
                  <Avatar
                    sx={{ width: "30px", height: "30px" }}
                    src={firstAccount?.avatar}
                  />
                </figure>
                何かお困りの事はございませんか？
              </div>
              <div className="message new">
                <figure className="avatar">
                  <Avatar
                    sx={{ width: "30px", height: "30px" }}
                    src={firstAccount?.avatar}
                  />
                </figure>
                今すぐオンライン商談が可能です！
                <br />
                <img
                  className="mtg-bg"
                  src={firstAccount?.thumbnail}
                  style={{ maxHeight: "100px" }}
                />
                <div className="mtg-btn message-submit btn-gradient-bg">
                  <a href="#">アポなし面談</a>
                </div>
              </div>
              {helpMessageOpen && (
                <>
                  <div className="message new">
                    <figure className="avatar">
                      <Avatar
                        sx={{ width: "30px", height: "30px" }}
                        src={firstAccount?.avatar}
                      />
                    </figure>
                    {firstAccount?.subButtonTitle}ですね
                  </div>
                  <div className="message new customize-message">
                    <figure className="avatar">
                      <img src={firstAccount?.avatar} />
                    </figure>
                    下記からお選びください。
                    <br />
                    <br />
                    <div className="row chat-btns">
                      <div className="col-md-12">
                        {firstAccount?.button?.map((item) => {
                          if (item.title === "") {
                            return <></>;
                          } else {
                            return (
                              <Button
                                key={item.title}
                                fullWidth
                                variant="outlined"
                                sx={{
                                  background: "rgb(255 255 255)",
                                  border: "1px solid #4762ff !important",
                                  color: "#4762ff !important",
                                  borderRadius: "15px",
                                  fontSize: "15px",
                                  boxShadow:
                                    "0px 3px 16px 0px rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
                                  fontWeight: "700",
                                  lineHeight: "0",
                                  height: "33px",
                                  py: 0,
                                  mb: "10px",
                                }}
                              >
                                <Link
                                  href={item.url}
                                  target="_top"
                                  sx={{ textDecoration: "none" }}
                                >
                                  {item.title}
                                </Link>
                              </Button>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="message-box">
            <div className="content">
              {haveSubbutton === false ? (
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6">
                    <div className="buttons">
                      <Button
                        onClick={() => {
                          handleNextButton();
                          // navigate(`/${domain}`);
                          // window.location.href = `https://mtg-non-apo.web.app/${domain}`;
                        }}
                        variant="contained"
                        sx={{ p: 0, color: "#fff", backgroundColor: "#4762ff" }}
                        className="button btn-apo-bg circle"
                      >
                        {firstAccount?.mainButton}
                      </Button>
                    </div>
                  </div>
                  <div className="col-3"></div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-6">
                    <div className="buttons">
                      {firstAccount?.isOneSubButton ? (
                        <>
                          <Button
                            onClick={() => {
                              // navigate(firstAccount?.button[0]?.url);
                              window.location.href =
                                firstAccount?.button[0]?.url;
                            }}
                            variant="outlined"
                            sx={{ p: 0 }}
                            className="button btn-now-bg circle message-sub"
                          >
                            {firstAccount?.button[0]?.title}
                          </Button>
                        </>
                      ) : (
                        <Button
                          onClick={() => {
                            setHelpMessageOpen(true);
                            scrollToTop();
                          }}
                          variant="outlined"
                          sx={{ p: 0 }}
                          className="button btn-now-bg circle message-sub"
                        >
                          {firstAccount?.subButtonTitle}
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="buttons">
                      <Button
                        onClick={() => {
                          handleNextButton();
                          // navigate(`/${domain}`);
                          // window.location.href = `https://mtg-non-apo.web.app/${domain}`;
                        }}
                        variant="contained"
                        sx={{ p: 0, color: "#fff", backgroundColor: "#4762ff" }}
                        className="button btn-apo-bg circle"
                      >
                        {firstAccount?.mainButton}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div id="chat-circle" className="btn btn-raised">
          <div id="chat-overlay"></div>
          <i className="fa fa-laptop" style={{ fontSize: "28px" }}></i>
        </div> */}
      </main>
    </div>
  );
}

export default IframePage;
