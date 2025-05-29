import   { useState, useEffect } from "react";
import { CardImgOverlay, Card, Col, Container, Row } from "react-bootstrap";
import house from "../assets/house.jpg";
import tom from "../assets/tom.png";
import dog from "../assets/dog.png";
import jerry from "../assets/jerry.png";
import "./TomJerry.css";
import { Link } from "react-router-dom";
 const TomJerry = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [score, setScore] = useState(0 );

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 3);
      setRandomNumber(newRandomNumber);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const image = randomNumber == 0 ? jerry : dog;
  const result = randomNumber == 0 ? "jerry" : "dog"; 
  const handle = (result) => {
  if (result == "jerry") {
    
    //alert("well done, roll again");
    setScore(score + 1);
  } else if (result == "dog") {
    setScore(score - 1);
  }
    console.log(result);
  };
 
  return (
    <>
     <h1 className="bg-primary text-light">Tom And Jerry</h1>   <Link to="/" className="btn btn-primary">Back</Link>
      <h1>Score:<span className="">{score}</span></h1>
      <Container>
        <Row name>
         
          <Col>
            <Card>
              <img src={house} className=" house float-left"></img>{" "}
              <CardImgOverlay   className="">
              <Col>
            <img src={tom} className= {`${image === jerry? "tom" :""}`}width={400} height={150}></img>
          </Col> <div   onClick={(e)=>handle(result)}>
                <img
                  className="    jerry float-end "
                  src={image}
                  width={300}
                  height={200}
                 
                ></img></div>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TomJerry;
