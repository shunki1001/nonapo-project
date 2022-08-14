import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css"
import "./style.css"

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Container, FloatingLabel, Form, InputGroup }  from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App() {
  return (
    <div className="image-container set-full-height">
      <a href="">
        <div className="logo-container">
          <div className="brand">
            <div className="logo"></div>
          </div>
        </div>
      </a>

        <Container>
          <Row>
            <Col sm={{ span: 8, offset: 2 }}>
            <div className="wizard-container">
              <div className="card wizard-card" data-color="red" id="wizard">
                <form action="contact.php" id="form" method="post" name="send">
                  <div className="wizard-header">
                    <h4 className="wizard-title">
                      <Button className="btn btn--shockwave is-active" style={{border: "none",borderRadius:"50%", padding: "9px", marginRight:"10px"}}></Button>
                      担当者へコールしております
                    </h4>
                    <h5>下記内容を入力してお待ちください※全て必須項目です。</h5>
                  </div>
                  {/* <div className="wizard-navigation">
                    <ul>
                      <li>
                        <a href="#details" data-toggle="tab">
                          情報入力
                        </a>
                      </li>
                      <li>
                        <a href="#captain" data-toggle="tab">
                          商談相手選択
                        </a>
                      </li>
                    </ul>
                  </div> */}

                  <Tabs defaultActiveKey="情報入力">
                    <Tab id="details" eventKey="情報入力" title="情報入力">
                        <Row>
                          <Col sm={{span:12}}>
                          <h4 className="info-text">
                            お送り頂き次第web商談させて頂きます
                          </h4>
                          </Col>
                          <Col sm={{span: 6}}>
                            <InputGroup>
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <FloatingLabel
                              controlId="name"
                              label="name"
                              className="form-group"
                            >
                              <Form.Control type="text" placeholder="onamae" />
                            </FloatingLabel>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                お名前<small>(required)</small>
                              </label>
                              <input
                                name="name"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            </InputGroup>
                            <InputGroup>
                            <span className="input-group-addon">
                              <i className="material-icons">email</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                メールアドレス<small>(required)</small>
                              </label>
                              <input
                                name="mail"
                                type="email"
                                className="form-control"
                                pattern="^(?!.*(gmail|yahoo|icloud.com|outlook.com)).*$"
                              />
                              <span>
                                ※gmailなどのフリーメールは受付ておりません
                              </span>
                            </div>
                            </InputGroup>
                        </Col>

                        <Col sm={{span: 6}}>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">portrait</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                会社名<small>(required)</small>
                              </label>
                              <input
                                name="companyname"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">phone</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                携帯の電話番号(ハイフンありで入力)
                                <small>(required)</small>
                              </label>
                              <input
                                name="tel"
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                                className="form-control"
                              />
                              <small></small>
                            </div>
                          </div>
                        </Col>
                        <Col sm={{span: 8}}>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">
                                住所<small>(required)</small>
                              </label>
                              <input
                                name="address"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Col>
                        </Row>
                    </Tab>
                    <Tab
                      id="captain"
                      eventKey="商談相手選択"
                      title="商談相手選択"
                    >
                      <Col sm={{span: 12}}>
                        <h4 className="info-text">
                          商談相手を選択してください
                        </h4>
                      </Col>

                      <div className="select-os">
                        <div className="scroll">
                          <Row>
                          <Col sm={{span: 6}}>
                              <input
                                type="radio"
                                id="windows"
                                name="os"
                                value="新倉りな"
                                className="windows"
                                checked
                              />
                              <label for="windows">
                                <div className="chat-title">
                                  <h1>面談担当:新倉 りな</h1>
                                  <span
                                    className="pull-right"
                                    id="button4"
                                  ></span>
                                  <br />
                                  <span className="btn btn--shockwave is-active"></span>
                                  <span>オンライン</span>
                                  <h2>My Alarm株式会社</h2>

                                  <figure className="avatar">
                                    <img src="./assets/img/icon06.png" />
                                  </figure>
                                </div>
                              </label>
                            </Col>

                            <Col sm={{span: 6}}>
                              <input
                                type="radio"
                                id="osx"
                                name="os"
                                value="田中　桂"
                                className="osx"
                                disabled
                              />
                              <label for="osx">
                                <div className="chat-title">
                                  <h1>面談担当:田中　桂</h1>
                                  <span
                                    className="pull-right"
                                    id="button4"
                                  ></span>
                                  <br />
                                  <span className="btn btn--shockwave passive"></span>
                                  <span>オフライン</span>
                                  <h2>My Alarm株式会社</h2>

                                  <figure className="avatar">
                                    <img src="./assets/img/icon06.png" />
                                  </figure>
                                </div>
                              </label>
                            
                          </Col>
                          </Row>
                          <Row>
                          <Col sm={{span: 6}}>
                              <input
                                type="radio"
                                id="linux"
                                name="os"
                                value="森まりこ"
                                className="linux"
                              />
                              <label for="linux">
                                <div className="chat-title">
                                  <h1>面談担当:森 まりこ</h1>
                                  <span
                                    className="pull-right"
                                    id="button4"
                                  ></span>
                                  <br />
                                  <span className="btn btn--shockwave is-active"></span>
                                  <span>オンライン</span>
                                  <h2>My Alarm株式会社</h2>

                                  <figure className="avatar">
                                    <img src="./assets/img/icon01.png" />
                                  </figure>
                                </div>
                              </label>
                            </Col>
                            <Col sm={{span: 6}}>
                              <input
                                type="radio"
                                id="osx1"
                                name="os"
                                value="柴田えり"
                                className="osx1"
                              />
                              <label for="osx1">
                                <div className="chat-title">
                                  <h1>面談担当:柴田 えり</h1>
                                  <span
                                    className="pull-right"
                                    id="button4"
                                  ></span>
                                  <br />
                                  <span className="btn btn--shockwave is-active"></span>
                                  <span>オンライン</span>
                                  <h2>My Alarm株式会社</h2>

                                  <figure className="avatar">
                                    <img src="./assets/img/icon05.png" />
                                  </figure>
                                </div>
                              </label>
                            </Col>
                          </Row>
                          <div className="row">
                            <div className="col-sm-6">
                              <input
                                type="radio"
                                id="linux2"
                                name="os"
                                value="森まりこ2"
                                className="linux2"
                              />
                              <label for="linux2">
                                <div className="chat-title">
                                  <h1>面談担当:森 まりこ</h1>
                                  <span
                                    className="pull-right"
                                    id="button4"
                                  ></span>
                                  <br />
                                  <span className="btn btn--shockwave is-active"></span>
                                  <span>オンライン</span>
                                  <h2>My Alarm株式会社</h2>

                                  <figure className="avatar">
                                    <img src="./assets/img/icon01.png" />
                                  </figure>
                                </div>
                              </label>
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="radio"
                                id="osx2"
                                name="os"
                                value="柴田えり3"
                                className="osx2"
                              />
                              <label for="osx2">
                                <div className="chat-title">
                                  <h1>面談担当:柴田 えり</h1>
                                  <span
                                    className="pull-right"
                                    id="button4"
                                  ></span>
                                  <br />
                                  <span className="btn btn--shockwave is-active"></span>
                                  <span>オンライン</span>
                                  <h2>My Alarm株式会社</h2>

                                  <figure className="avatar">
                                    <img src="./assets/img/icon05.png" />
                                  </figure>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h4 className="info-text">
                        宜しければ下記の商談ボタンを押してください。
                      </h4>

                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1"></div>
                      </div>
                    </Tab>
                  </Tabs>
                  <div className="wizard-footer">
                    <div className="pull-right">
                      <input
                        type="button"
                        id="submit"
                        className="btn btn-next btn-fill btn-danger btn-wd"
                        name="next"
                        value="次へ"
                      />
                      <input
                        type="submit"
                        id="submit"
                        className="btn btn-finish btn-fill btn-danger btn-wd"
                        name="finish"
                        value="商談を始める"
                      />
                    </div>
                    <div className="pull-left">
                      <input
                        type="button"
                        className="btn btn-previous btn-fill btn-default btn-wd"
                        name="previous"
                        value="戻る"
                      />
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
            <img src="assets/img/log-tp.png" className="footer-logo" />
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
