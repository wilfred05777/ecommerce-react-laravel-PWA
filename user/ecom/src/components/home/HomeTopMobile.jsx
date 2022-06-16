import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeSlider from "./HomeSlider";

export class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTopMobile;
