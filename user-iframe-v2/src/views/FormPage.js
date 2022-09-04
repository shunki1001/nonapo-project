import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap.min.css"
import "../styles/form-component.css";

import { useEffect, useRef, useState, useContext } from "react";

import { Link, useParams } from "react-router-dom";

import logTop from "../img/log-tp.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import PortraitIcon from "@mui/icons-material/Portrait";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";

import BoxCoveringInput from "../components/BoxCoveringInpuut";
import PartnerCard from "../components/PartnerCard";

import TopText from "../components/TopText";
import validationFunc from "../functions/validationFunc";
import { DataContext } from "../context/DataContext";
import getInfoList from "../functions/getInfoList";
import registAppointment from "../functions/registAppointment";
import getInfoAccount from "../functions/getInfoAccount";

function FormPage() {
  const { whereFrom, setWhereFrom } = useContext(DataContext);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showSendButton, setShowSendButton] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const [tabkey, setTabkey] = useState("input");

  const [name, setName] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [accountList, setAccountList] = useState([]);
  const [appointmentUrl, setAppointmentUrl] = useState("");

  let params = useParams();
  const domain = params.domain;
  const index = params.index;

  // validation用state
  const [inputError, setInputError] = useState({
    name: false,
    enterprise: false,
    email: false,
    phone: false,
    address: false,
  });

  const [selected, setSelected] = useState("");

  const handleClickSend = () => {
    console.log("submit button clicked!");
    setSuccessDialogOpen(true);
    registAppointment(name, phone, enterprise, address, whereFrom, selected);
    // iframeから来た場合、選択された担当者のURLをセット
    if (index === undefined) {
      setAppointmentUrl(
        accountList.filter((item) => {
          return item.username === selected;
        })[0].url
      );
    }
  };

  useEffect(() => {
    if (index === undefined) {
      console.log("iframeからの流入");
      getInfoList(domain, whereFrom, setAccountList, setWhereFrom);
    } else {
      console.log("SNSからの流入");
      getInfoAccount(domain, index, setSelected, setAppointmentUrl);
    }
  }, []);

  useEffect(() => {
    if (tabkey === "input") {
      setShowBackButton(false);
      setShowNextButton(true);
      setShowSendButton(false);
    } else {
      setShowBackButton(true);
      setShowNextButton(false);
      setShowSendButton(true);
    }
  }, [tabkey]);

  // 初回validationを防ぐため
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, []);

  // validationレンダリング用
  useEffect(() => {
    if (renderCount.current > 2) {
      if (validationFunc("name", name)) {
        setInputError({ ...inputError, name: false });
      } else {
        setInputError({ ...inputError, name: true });
      }
    }
    console.log(renderCount);
  }, [name]);

  useEffect(() => {
    if (renderCount.current > 2) {
      if (validationFunc("email", email)) {
        setInputError({ ...inputError, email: false });
      } else {
        setInputError({ ...inputError, email: true });
      }
    }
    console.log(renderCount);
  }, [email]);
  useEffect(() => {
    if (renderCount.current > 2) {
      if (validationFunc("enterprise", enterprise)) {
        setInputError({ ...inputError, enterprise: false });
      } else {
        setInputError({ ...inputError, enterprise: true });
      }
    }
    console.log(renderCount);
  }, [enterprise]);

  useEffect(() => {
    if (renderCount.current > 2) {
      if (validationFunc("phone", phone)) {
        setInputError({ ...inputError, phone: false });
      } else {
        setInputError({ ...inputError, phone: true });
      }
    }
    console.log(renderCount);
  }, [phone]);

  useEffect(() => {
    if (renderCount.current > 2) {
      if (validationFunc("address", address)) {
        setInputError({ ...inputError, address: false });
      } else {
        setInputError({ ...inputError, address: true });
      }
    }
    console.log(renderCount);
  }, [address]);

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
                <TopText />

                <Tabs
                  activeKey={tabkey}
                  justify
                  onSelect={(k) => setTabkey(k)}
                  className="custom-tab-nav"
                >
                  <Tab id="details" eventKey="input" title="情報入力">
                    <Row>
                      <Col sm={{ span: 12 }}>
                        <h5 className="info-text">
                          お送り頂き次第web商談させて頂きます
                        </h5>
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
                            error={inputError.name}
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              renderCount.current = renderCount.current + 1;
                            }}
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
                            error={inputError.email}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              renderCount.current = renderCount.current + 1;
                            }}
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
                            error={inputError.enterprise}
                            value={enterprise}
                            onChange={(e) => {
                              setEnterprise(e.target.value);
                              renderCount.current = renderCount.current + 1;
                            }}
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
                            error={inputError.phone}
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              renderCount.current = renderCount.current + 1;
                            }}
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
                            error={inputError.address}
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                              renderCount.current = renderCount.current + 1;
                            }}
                          />
                        </BoxCoveringInput>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab
                    id="captain"
                    eventKey="choice"
                    title="商談相手選択"
                    disabled={
                      inputError.name ||
                      inputError.email ||
                      inputError.enterprise ||
                      inputError.phone ||
                      inputError.address ||
                      renderCount.current < 2
                    }
                  >
                    <PartnerCard
                      selected={selected}
                      setSelected={setSelected}
                      accountList={accountList}
                    />
                  </Tab>
                </Tabs>
                <div className="wizard-footer">
                  <div className="pull-right">
                    {showNextButton && (
                      <input
                        type="button"
                        id="submit-input"
                        className="btn btn-next btn-fill btn-danger btn-wd"
                        name="next"
                        value="次へ"
                        onClick={() => {
                          if (
                            !inputError.name &&
                            !inputError.email &&
                            !inputError.enterprise &&
                            !inputError.phone &&
                            !inputError.address &&
                            renderCount.current > 2 &&
                            name.length > 0 &&
                            email.length > 0 &&
                            enterprise.length > 0 &&
                            phone.length > 0 &&
                            address.length > 0
                          ) {
                            if (index === undefined) {
                              setTabkey("choice");
                            } else {
                              handleClickSend();
                            }
                          }
                        }}
                      />
                    )}
                    {showSendButton && (
                      <input
                        type="button"
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
                          setTabkey("input");
                        }}
                      />
                    )}
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Dialog
        open={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            width: "80vw",
            height: "40vh",
          },
        }}
      >
        <DialogContent sx={{ textAlign: "center", paddingTop: "10%" }}>
          <Typography variant="h6">商談用のURLを発行しました。</Typography>
          <Typography variant="h6">
            下記URLからアクセスお願い致します。
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{ my: 3, width: "50%", height: "5em" }}
              onClick={() => (window.location.href = appointmentUrl)}
            >
              {appointmentUrl}
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{ my: 3 }}
              onClick={() => (window.location.href = whereFrom)}
            >
              元のページへ戻る
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

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

export default FormPage;
