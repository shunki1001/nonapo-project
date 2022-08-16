import { Col, Row } from "react-bootstrap";

import icon01 from "../img/icon01.png";

const PartnerCard = (props) => {
  const { selected, setSelected } = props;
  return (
    <>
      <Col sm={{ span: 12 }}>
        <h4 className="info-text">商談相手を選択してください</h4>
      </Col>

      <div className="select-os">
        <div className="scroll">
          <Row>
            <Col sm={{ span: 6 }}>
              <input
                type="radio"
                id="osx"
                name="os"
                value="田中　桂"
                className="osx"
                checked={selected === "田中　桂"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <label for="osx">
                <div className="chat-title">
                  <h1>面談担当:田中　桂</h1>
                  <span className="pull-right" id="button4"></span>
                  <span className="btn btn--shockwave passive"></span>
                  <span style={{ color: "#181b31", fontSize: "12px" }}>
                    オフライン
                  </span>
                  <h2 style={{ display: "inline-block" }}>My Alarm株式会社</h2>

                  <figure className="avatar">
                    <img src={icon01} alt="" />
                  </figure>
                </div>
              </label>
            </Col>

            <Col sm={{ span: 6 }}>
              <input
                type="radio"
                id="osx"
                name="os"
                value="田中　桂2"
                className="osx"
                disabled
                checked={selected === "田中　桂2"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <label for="osx">
                <div className="chat-title">
                  <h1>面談担当:田中　桂</h1>
                  <span className="pull-right" id="button4"></span>
                  <span className="btn btn--shockwave passive"></span>
                  <span style={{ color: "#181b31", fontSize: "12px" }}>
                    オフライン
                  </span>
                  <h2 style={{ display: "inline-block" }}>My Alarm株式会社</h2>

                  <figure className="avatar">
                    <img src={icon01} alt="" />
                  </figure>
                </div>
              </label>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 6 }}>
              <input
                type="radio"
                id="linux"
                name="os"
                value="森まりこ"
                className="linux"
                checked={selected === "森まりこ"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <label for="linux">
                <div className="chat-title">
                  <h1>面談担当:森 まりこ</h1>
                  <span className="pull-right" id="button4"></span>
                  <span className="btn btn--shockwave is-active"></span>
                  <span style={{ color: "#181b31", fontSize: "12px" }}>
                    オンライン
                  </span>
                  <h2 style={{ display: "inline-block" }}>My Alarm株式会社</h2>

                  <figure className="avatar">
                    <img src={icon01} alt="" />
                  </figure>
                </div>
              </label>
            </Col>
            <Col sm={{ span: 6 }}>
              <input
                type="radio"
                id="osx1"
                name="os"
                value="柴田えり"
                className="osx1"
                checked={selected === "柴田えり"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <label for="osx1">
                <div className="chat-title">
                  <h1>面談担当:柴田 えり</h1>
                  <span className="pull-right" id="button4"></span>
                  <span className="btn btn--shockwave is-active"></span>
                  <span style={{ color: "#181b31", fontSize: "12px" }}>
                    オンライン
                  </span>
                  <h2 style={{ display: "inline-block" }}>My Alarm株式会社</h2>

                  <figure className="avatar">
                    <img src={icon01} alt="" />
                  </figure>
                </div>
              </label>
            </Col>
          </Row>
        </div>
      </div>

      <h4 className="info-text">
        宜しければ下記の商談ボタンを押してください。
      </h4>

      <Row>
        <Col sm={{ span: "10", offset: "1" }}></Col>
      </Row>
    </>
  );
};

export default PartnerCard;
