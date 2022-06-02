import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container,Row,Col} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Timer from "./Timer";

///IMAGES
import Image1 from "./assets/proj-im1.png";
import Image3 from "./assets/proj-im3.png";
import Image2 from "./assets/proj-im2.jpg";
import Image4 from "./assets/proj-im4.jpg";
import Image5 from "./assets/proj-im5.png";
import Image6 from "./assets/proj-im6.jpg";

function App() {
  const QA = [
    {
      titre: "À propos de l'urothélium",
      reponse1: "Il est présent dans la lumière néphran",
      reponse2: "Il est présent sur la paroi de la vassin",
      reponse3: " c'est un épithélium simple",
      reponse4: "Il présente des plaques membranaires",
    },
    {
      titre: " Quelle est la meilleure école d'ingé ?",
      reponse1: "ENSIIE",
      reponse2: "ENSIIE",
      reponse3: "ENSIIE",
      reponse4: "ENSIIE",
    },
  ];

  const [index, setIndex] = useState(0);

  const [styles, setStyle] = useState();

  const NextPage = () => setIndex(index + 1);

  useEffect(() => {
    index === 1 ? setStyle("animationFade_In") : setStyle();
  }, [index]);

  return (
    <div>
      <Container className={styles}>
        <Row>
          <Col md={4} xs={4}>
            <img width={70} height={50} src={Image1} alt="decoration" />
          </Col>
          <Col md={4} xs={4} className="text pt-4 rep1_4">
            {" "}
            <h5> {QA[index].titre} </h5>{" "}
          </Col>
          <Col md={4} xs={4} className="position">
            <img width={64} height={64} src={Image3} alt="clock" />{" "}
          </Col>
        </Row>
        <Row>
          <Col md={8} xs={8} className="position">
            <img className="Image2" src={Image2} alt="urothélium" />
          </Col>
          <Col md={4} xs={4} className="mt-4 position">
            {" "}
            <Timer />{" "}
          </Col>
        </Row>
        <Row className="responsive_row">
          <Col md={3} className="content">
            <Row>
              {" "}
              <Col className="my-4">
                {" "}
                <img width={64} height={64} src={Image4} alt="notif" />{" "}
              </Col>
            </Row>
            <Row>
              {" "}
              <Col className="my-4 mx-4">
                {" "}
                <img width={64} height={64} src={Image5} alt="drapeau" />{" "}
              </Col>
            </Row>
            <Row>
              {" "}
              <Col className="my-4">
                <img width={64} height={64} src={Image6} alt="question" />{" "}
              </Col>
            </Row>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={6} xs={12} className="reponse column_centered">
                {" "}
                <Button
                  variant="outline-success"
                  className="Columns  mb-3"
                  size="lg"
                >
                  {QA[index].reponse1}{" "}
                </Button>{" "}
              </Col>
              <Col md={6} xs={12} className="reponse column_centered">
                {" "}
                <Button
                  variant="outline-success"
                  className="Columns  mb-3"
                  size="lg"
                >
                  {QA[index].reponse2}{" "}
                </Button>{" "}
              </Col>
              <Col md={6} xs={12} className="reponse column_centered">
                {" "}
                <Button
                  variant="outline-success"
                  className="Columns  mb-3"
                  size="lg"
                >
                  {QA[index].reponse3}{" "}
                </Button>{" "}
              </Col>
              <Col md={6} xs={12} className="reponse column_centered">
                {" "}
                <Button
                  variant="outline-success"
                  className="Columns  mb-3"
                  size="lg"
                >
                  {QA[index].reponse4}{" "}
                </Button>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} className="position">
            {" "}
            <input
              type="button"
              value="valider"
              className="buttons"
              onClick={NextPage}
            />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
