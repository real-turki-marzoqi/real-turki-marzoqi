import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import Loader from './Loader';

function Projects() {
  return (
    <Container className="mt-5 projects">
       <h1 style={{color:"#540645ef"}} className="mb-4">Programming  Experience </h1>
      <table className="table table-bordered table-custom">
        <thead>
          <tr>
            <th style={{backgroundColor:" #540645ef" , color:"white"}} scope="col">Programming Experience</th>
            <th style={{backgroundColor:" #540645ef" , color:"white"}} scope="col">Technologies/Languages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th   style={{backgroundColor:" #f2d1a3ef"}} scope="row">Web Full Stack</th>
            <td style={{backgroundColor:" #f2d1a3ef"}} >HTML, CSS, JavaScript</td>
          </tr>
          <tr>
            <th style={{backgroundColor:" #f2d1a3ef"}} scope="row">React.js</th>
            <td style={{backgroundColor:" #f2d1a3ef"}} >React.js</td>
          </tr>
          <tr>
            <th  style={{backgroundColor:" #f2d1a3ef"}} scope="row">Node.js</th>
            <td style={{backgroundColor:" #f2d1a3ef"}} >Node.js</td>
          </tr>
          <tr>
            <th style={{backgroundColor:" #f2d1a3ef"}}  scope="row">MongoDB</th>
            <td style={{backgroundColor:" #f2d1a3ef"}} >MongoDB</td>
          </tr>
          <tr>
            <th style={{backgroundColor:" #f2d1a3ef"}}  scope="row">PHP</th>
            <td style={{backgroundColor:" #f2d1a3ef"}} >PHP</td>
          </tr>
          <tr>
            <th style={{backgroundColor:" #f2d1a3ef"}} scope="row">MySQL</th>
            <td style={{backgroundColor:" #f2d1a3ef"}} >MySQL</td>
          </tr>
        </tbody>
      </table>
     
      <Row>
        <Col lg={12 } md={12} xs={12}>
        <Loader/>
        </Col>

      </Row>
    </Container>
  );
}

export default Projects;
