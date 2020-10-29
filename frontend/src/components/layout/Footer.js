import React from 'react'
import {Container,Col,Row} from "react-bootstrap"
const Footer = () => {
    return (
        <footer>
           <Container >
               <Row>
                   <Col className="col-12 col-md-6 text-center text-md-left py-1"> Beard Boss &copy; 2020 </Col>
                   <Col className="col-12 col-md-6 text-center text-md-right py-1"> Developed and Designed by Manik Dhanjal</Col>
               </Row>
               
           </Container>
        </footer>
    )
}

export default Footer
