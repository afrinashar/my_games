import React, { useState, useEffect } from "react";
import { CardImgOverlay, Card, Col, Container, Row } from "react-bootstrap";
import house from "../assets/house.jpg";
import tom from "../assets/tom.png";
import dog from "../assets/dog.png";
import jerry from "../assets/jerry.png";
import "./TomJerry.css";
import { Link } from "react-router-dom";

const TomJerry = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 3);
      setRandomNumber(newRandomNumber);
    }, 1000); // Jerry moves every 1 second

    return () => clearInterval(interval);
  }, []);

  const image = randomNumber === 0 ? jerry : dog;
  const result = randomNumber === 0 ? "jerry" : "dog";

  const handle = (result) => {
    if (result === "jerry") {
      setScore(score + 1);
    } else if (result === "dog") {
      setScore(score - 1);
    }
  };

  return (
    <>
      <h1 className="bg-primary text-light">Tom And Jerry</h1>
      <Link to="/" className="btn btn-primary">Back</Link>
      <h1>Score: <span>{score}</span></h1>
      <Container fluid>
        <Row>
          <Col>
            <Card className="position-relative">
              <img src={house} className="house img-fluid" alt="house" />
              <CardImgOverlay className="position-relative">
                <img
                  src={tom}
                  className="tom"
                  alt="tom"
                />
                <div onClick={() => handle(result)} className="jerry-container position-absolute">
                  <img
                    className={`jerry ${image === jerry ? "jerry-move" : ""}`}
                    src={image}
                    alt="jerry or dog"
                  />
                </div>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TomJerry;
