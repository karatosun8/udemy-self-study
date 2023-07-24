import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Courses = ({ title, description, img }) => {
  // console.log(props);
  // const title=props.title
  // const description=props.description
  // const {title,description} =props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        
      </Card.Body>
    </Card>
      )
    
};
export default Courses;
