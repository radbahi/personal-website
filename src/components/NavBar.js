import React from "react";
import { Container, Row, Col, Nav, Media } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container xs={5}>
      <Col>
        <Media>
          <img
            width={128}
            height={128}
            className="mr-3"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEXqXj838lTgQ/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=ujTY_qby_kjm_8JWTdmFDQL9YMezptARHekOwuk6UzI"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Radouane Bahi</h5>
          </Media.Body>
          <Nav variant="pills" defaultActiveKey="/main" className="flex-column">
            <Row>
              <Nav.Link href="/main">Main Page</Nav.Link>
            </Row>
          </Nav>
        </Media>
      </Col>
    </Container>
  );
};

export default NavBar;
