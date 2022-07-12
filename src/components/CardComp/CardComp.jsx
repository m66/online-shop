import React from "react";
import { Button, Card } from "react-bootstrap";
import "./cardComp.scss";

function CardComp({name, imgUrl, exist, price, code}) {
  return (
    <Card style={{ width: "300px !importent" }}>
      <Card.Img variant="top" src={`./images/watches/${imgUrl}.jpeg`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {exist ? <span className='exist exist-true'>{"Առկա է"}</span> : <span className='exist exist-false'>{"Պատվիրել"}</span>}
        </Card.Text>
        <Card.Text>Արժեք։ {price}</Card.Text>
        <Card.Text>Կոդ։ {code}</Card.Text>
        <Button variant="primary">Բացել</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
