import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import turki from './turki.jpg';
import Loader from './Loader';
import Myİmage from './Myİmage';
import Text from "./Text"
import GoTo from './Goto';
import Wlcom from './wlcom';
import Planet from './planet';
import { Link } from 'react-router-dom';
import Footer from "./Footer"



const Home = () => {
  return (
    <div className='homepage'>
      <NavBar />
      <div>
        
      <Row className='row0'>
      <Col lg={12} md={12} sm={12} xs={12}>
        <h1 className='welcome-text'>Welcome To My Personal</h1>
        </Col>

        <Col lg={12} md={12} xs={12} sm={12} >
        <Wlcom/>
        </Col>
        

       
        <Row className='planetrow'>
        <Col sm={12} lg={12} md={12} xs={12}>
        <Planet/>
      
        </Col> 
        </Row>
      
        
      </Row>

      
      <Container>

      
        
        <Row className='row2 ' >
          <Col className="row1col1" lg={6} md={8} xs={12} sm={12}>
            <Col className='row1col1col1 mt-2 pt-10' lg={12} md={10} xs={12} sm={12}>
          <Myİmage className/>
            </Col>
           
          </Col>
          <Col className="row1col2" lg={6} md={4} xs={12} sm={12}>
           <Text/>
          </Col>
        </Row>

        

        
        <Row style={{marginTop:"100PX"}} className='row3'>
          <Link to="/projects"></Link>
      <Col lg={4} md={3} xs={12} sm={12}>
      <Link to="/skilles">
          <GoTo name="SKİLLES" />
        </Link>
      </Col>

      <Col lg={4} md={3} xs={12} sm={12}>
        <Link to="/PROJECTS">
          <GoTo name="PROJECTS" />
        </Link>
      </Col>


      <Col lg={4} md={3} xs={12} sm={12}>
      <Link to="/contact">
        <GoTo name="CONTACT" />
        </Link>
      </Col>
    </Row>
        
      </Container>
    </div>
    
    </div>
  );
};

export default Home;
