import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap.min.css"
import "./styles/ld-original.css";
import "./styles/style.css";
import testImage from "./img/64.png";

import { Avatar, Button, Link } from "@mui/material";

function App() {
  const handleSubButton = () => {
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
            <h1 style={{ display: "inline" }}>面談担当:新倉 りな </h1>
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
            <h2 style={{ display: "inline" }}>My Alarm株式会社</h2>

            <Avatar sx={{ position: "absolute", top: "8px", left: "9px" }} />
          </div>
          <div className="messages">
            <div className="messages-content scroll">
              <div className="message new">
                <figure className="avatar">
                  <Avatar sx={{ width: "30px", height: "30px" }} />
                </figure>
                何かお困りの事はございませんか？
              </div>
              <div className="message new">
                <figure className="avatar">
                  <Avatar sx={{ width: "30px", height: "30px" }} />
                </figure>
                今すぐオンライン商談が可能です！
                <br />
                <img className="mtg-bg" src={testImage} />
                <div className="mtg-btn message-submit btn-gradient-bg">
                  <a href="#">アポなし面談</a>
                </div>
              </div>
              <div className="message new">
                <figure className="avatar">
                  <img src="./assets/img/icon04.png" />
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
                    <Button
                      onClick={handleSubButton}
                      variant="outlined"
                      sx={{ p: 0 }}
                      className="button btn-now-bg circle message-sub"
                    >
                      その他/ヘルプ
                    </Button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="buttons">
                    <Button
                      onClick={handleAppointButton}
                      variant="contained"
                      sx={{ p: 0 }}
                      className="button btn-apo-bg circle"
                    >
                      アポ無し商談
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

export default App;
