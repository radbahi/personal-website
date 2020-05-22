import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
} from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Radouane Bahi</h1>
        <p>Come up with some funky tag-line for myself here.</p>
        <p>
          <Button variant="primary">Learn more</Button>{" "}
          {
            // have this button lead to my projects
          }
        </p>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col xs={5}>
            <Carousel>
              <Carousel.Item>
                <img
                  // width={900}
                  // height={500}
                  className="container-div"
                  src="https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.0-9/314115_455188621179794_1106394410_n.jpg?_nc_cat=102&_nc_sid=210fed&_nc_ohc=Xceuy9OwKT4AX-w4WZz&_nc_ht=scontent.fnyc1-1.fna&oh=22ae5ca6b72baef6f572a13d602ec919&oe=5EEC6C76"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  // width={900}
                  // height={500}
                  className="container-div"
                  src="https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.0-9/403464_428243003874356_1235179476_n.jpg?_nc_cat=101&_nc_sid=210fed&_nc_ohc=7QplkWCjx4wAX_CPxhW&_nc_ht=scontent.fnyc1-1.fna&oh=6f3b5bcee9624c42299a934bdfb328bc&oe=5EE9D47A"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
