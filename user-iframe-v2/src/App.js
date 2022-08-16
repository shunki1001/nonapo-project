import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap.min.css"
import "./styles/component.css";
import "./styles/style.css";

import { useState } from "react";

import logTop from "./img/log-tp.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import PortraitIcon from "@mui/icons-material/Portrait";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";

import BoxCoveringInput from "./components/BoxCoveringInpuut";
import PartnerCard from "./components/PartnerCard";

import TopText from "./components/TopText";

function App() {
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showSendButton, setShowSendButton] = useState(false);

  const handleClickSend = () => {
    console.log("submit button clicked!");
  };

  return (
    <div className="image-container set-full-height">
      <a href="/">
        <div className="logo-container">
          <div className="brand">
            <div className="logo"></div>
          </div>
        </div>
      </a>

      <Container fluid="md" style={{ maxWidth: "1170px", fontSize: "0.85rem" }}>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="wizard-container">
              <div className="card wizard-card" data-color="red" id="wizard">
                <form action="contact.php" id="form" method="post" name="send">
                  <TopText />

                  <Tabs
                    defaultActiveKey="情報入力"
                    justify
                    className="custom-tab-nav">
                    <Tab id="details" eventKey="情報入力" title="情報入力">
                      <Row>
                        <Col sm={{ span: 12 }}>
                          <h4 className="info-text">
                            お送り頂き次第web商談させて頂きます
                          </h4>
                        </Col>
                        <Col sm={{ span: 6 }}>
                          <BoxCoveringInput>
                            <PersonIcon
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="name"
                              label="お名前(required)"
                              variant="standard"
                              required
                              fullWidth
                            />
                          </BoxCoveringInput>
                          <BoxCoveringInput>
                            <MailIcon
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="email"
                              label="メールアドレス(required)"
                              variant="standard"
                              required
                              fullWidth
                            />
                          </BoxCoveringInput>
                          <Typography variant="caption">
                            ※gmailなどのフリーメールは受付ておりません
                          </Typography>
                        </Col>

                        <Col sm={{ span: 6 }}>
                          <BoxCoveringInput>
                            <PortraitIcon
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="enterprise"
                              label="会社名(required)"
                              variant="standard"
                              required
                              fullWidth
                            />
                          </BoxCoveringInput>
                          <BoxCoveringInput>
                            <PhoneIcon
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="phone"
                              label="電話番号(ハイフンあり)(required)"
                              variant="standard"
                              required
                              fullWidth
                            />
                          </BoxCoveringInput>
                        </Col>
                        <Col sm={{ span: 8 }}>
                          <BoxCoveringInput>
                            <EventIcon
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="address"
                              label="住所(required)"
                              variant="standard"
                              required
                              fullWidth
                            />
                          </BoxCoveringInput>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab
                      id="captain"
                      eventKey="商談相手選択"
                      title="商談相手選択">
                      <PartnerCard />
                    </Tab>
                  </Tabs>
                  <div className="wizard-footer">
                    <div className="pull-right">
                      {showNextButton && (
                        <input
                          type="button"
                          id="next"
                          className="btn btn-next btn-fill btn-danger btn-wd"
                          name="next"
                          value="次へ"
                          onClick={() => {
                            setShowBackButton(true);
                            setShowNextButton(false);
                            setShowSendButton(true);

                            // formValidation();
                          }}
                        />
                      )}
                      {showSendButton && (
                        <input
                          type="submit"
                          id="submit"
                          className="btn btn-finish btn-fill btn-danger btn-wd"
                          name="finish"
                          value="商談を始める"
                          onClick={() => handleClickSend()}
                        />
                      )}
                    </div>
                    <div className="pull-left">
                      {showBackButton && (
                        <input
                          type="button"
                          className="btn btn-previous btn-fill btn-default btn-wd"
                          name="previous"
                          value="戻る"
                          onClick={() => {
                            setShowBackButton(false);
                            setShowNextButton(true);
                            setShowSendButton(false);
                          }}
                        />
                      )}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer">
        <div className="container text-center text-white">
          supported by
          <a href="https://non-appoint.com/">
            <img src={logTop} className="footer-logo" alt="logo" />
          </a>
          <br />
          © 2022 My alarm All Rights Reserved. <br />
          運営会社:<a href="https://myalarm.site/company">My Alarm株式会社</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
