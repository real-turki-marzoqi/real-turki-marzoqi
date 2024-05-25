import { Col, Container, Row } from "react-bootstrap"

const Proj = ()=>{

    return(
        <Container>
            <Row>
                <Col md={12} xs={12} lg={12} sm={12}>
          <h2 className="custom-heading mb-4">Programming Projects</h2>
      <ul className="custom-list">
        <li>E-commerce website with Margin technology</li>
        <li>Blog website using HTML, CSS, JavaScript, PHP, MySQL</li>
        <li>To-Do List website</li>
        <li>Weather website using React.js</li>
        <li>Prayer times website</li>
        <li>Movie showcase and classification website</li>
      </ul>
      </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} xs={12} sm={12}>
        <div class="lloader"></div>
        </Col>
     
      </Row>
      </Container>
    )
}
export default Proj