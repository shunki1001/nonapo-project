import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap.min.css"
import "../styles/ld-original.css";
import "../styles/style.css";

import { Avatar, Button, Link } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

function IframePage() {
  const { setDomain, firstAccount } = useContext(DataContext);

  const navigate = useNavigate();

  let params = useParams();
  useEffect(() => {
    setDomain(params.domain);
  }, []);

  const handleSubButtonOpen = () => {
    alert("サブボタンクリック");
  };
  const handleAppointButton = () => {
    alert("アポ無し商談クリック");
  };
  return (
    <div id="wrap">
      <main id="content" className="content">
        <section className="vc_row fullheight d-flex flex-wrap align-items-center bg-cover pt-150">
          <div className="container">
            <div className="row"></div>
          </div>
        </section>

        <div id="modal-container">
          <div className="modal-background">
            <div className="modal">
              <svg
                className="modal-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect
                  x="0"
                  y="0"
                  fill="none"
                  width="226"
                  height="162"
                  rx="3"
                  ry="3"
                ></rect>
              </svg>
            </div>
          </div>
        </div>

        <div className="chat" id="p2">
          <div className="chat-title">
            <h1 style={{ display: "inline" }}>{firstAccount?.username}</h1>
            <span
              className="pull-right"
              style={{ color: "#afafaf", fontSize: "25px" }}
              id="button4"
            >
              <i className="fa fa-close"></i>
            </span>
            <br />
            <span className="atn btn--shockwave is-active"></span>
            <span style={{ color: "#181b31", fontSize: "12px" }}>
              オンライン
            </span>
            <h2 style={{ display: "inline" }}>{firstAccount?.company}</h2>

            <Avatar
              sx={{ position: "absolute", top: "8px", left: "9px" }}
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
                <img className="mtg-bg" src={firstAccount?.thumbnail} />
                <div className="mtg-btn message-submit btn-gradient-bg">
                  <a href="#">アポなし面談</a>
                </div>
              </div>
              <div className="message new">
                <figure className="avatar">
                  <img src={firstAccount?.thumbnail} />
                </figure>
                下記からお選びください。
                <br />
                <br />
                <div className="row chat-btns">
                  <div className="col-md-12">
                    <Button
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
                        lineHeight: "2",
                        py: 0,
                      }}
                    >
                      <Link href="#">資料請求</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-box">
            <textarea
              type="text"
              className="message-input display-none"
              placeholder="Type message..."
            ></textarea>
            <button type="submit" className=" display-none">
              Send
            </button>

            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <div className="buttons">
                    {firstAccount?.isOneSubButton ? (
                      <Button
                        onClick={() => navigate(firstAccount?.button[0]?.url)}
                        variant="outlined"
                        sx={{ p: 0 }}
                        className="button btn-now-bg circle message-sub"
                      >
                        {firstAccount?.button[0]?.title}
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubButtonOpen}
                        variant="outlined"
                        sx={{ p: 0 }}
                        className="button btn-now-bg circle message-sub"
                      >
                        {firstAccount?.button[0].title}
                      </Button>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="buttons">
                    <Button
                      onClick={handleAppointButton}
                      variant="contained"
                      sx={{ p: 0, color: "#fff" }}
                      className="button btn-apo-bg circle"
                    >
                      {firstAccount?.mainButton}
                    </Button>
                  </div>
                </div>
              </div>
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
