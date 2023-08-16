import React from "react";
import "./bottomFooter.css";
import { Container,Row,Col } from "reactstrap";
import "./bottomFooter.css";

function bottomFooter() {
  return (
  <div className="footer">
<Container>
  <Row>
    <Col>
      <p>Copyright © 2023 Bütün hüquqlar qorunur</p>
    </Col>
    <Col >
      <p>Azərbaycan Respublikası Əmlak Hərrac Mərkəzi</p>
    </Col>
  </Row>
</Container>
  </div>
  );
}
export default bottomFooter;
