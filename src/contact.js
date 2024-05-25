import { Container, Row ,Col} from "react-bootstrap"
import insta from "./insta.png"
import twe from "./twet.png"
import telegram from "./telegram.png"
import github from "./git.png"


const Contact = ()=>{

    return(
        <Container className="contact" style={{minHeight:"600px"}} >
            <Row >
                <Col >

                <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div style={{color:"black"}} id="h3">Contact</div>
        </div>
</div>
                
                
                </Col>
            </Row>


            <Row className="con" style={{marginTop:"10%"}}>
                <Col lg={3} md={2} xs={12}  sm={12}>
                    <a href="https://www.instagram.com/realt_urki/">
                    <img  className="image" src={insta}/>
                    </a>
               
                </Col>

                <Col lg={3} md={2} xs={12}  sm={12}>
                    <a href="https://t.me/turkialmarzoqi">
                <img  className="image" src={telegram}/>
                </a>
                </Col>
                <Col lg={3} md={2}  xs={12} sm={12}>
                    <a href="https://x.com/trk_ii1?s=21">
                    <img  className="image" src={twe}/>
                    </a>
              
                </Col>
                <Col lg={3} md={2} xs={12} sm={12}>
                    <a href="https://github.com/real-turki-marzoqi">
                    <img   className="image" src={github}/>
                     </a>
                
                </Col>
            </Row>
        </Container>
    )
}
export default Contact