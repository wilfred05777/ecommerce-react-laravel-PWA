import React, { Component, Fragment } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";

export class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar className="navbar" fixed={"top"} bg="light">
            <Container fluid={"true"}>
              <Row>
                <Col>
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col lg={4} md={4} sm={12} sx={12}></Col>
                <Col lg={4} md={4} sm={12} sx={12}></Col>
              </Row>
              {/* <Navbar.Brand href="#home">Brand link</Navbar.Brand> */}
            </Container>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
