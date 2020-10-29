import React,{useState,useEffect} from 'react'
import { Col, Row ,Image, ListGroup,Button} from 'react-bootstrap'
import styled from "styled-components"
import Ratings from '../components/atom/Ratings'
import axios from "axios"


const Section = styled.section`

`
const ProductScreen = ({match}) => {

    const [product, setproduct] = useState({})
    useEffect(() => {
      (async function(){
            var {data} = await axios.get(`/api/product/${match.params.id}`)
            setproduct(data)
      })()
    })
    return (
        <Section>
            <Row>
                <Col md={5}><Image src={product.image} fluid/></Col>
                <Col md={4}>
                    <h2 className="pt-3 ">{product.name}</h2>
                    <hr/>
                    <Ratings rate={product.rating} review={product.numReviews}/>
                    <hr/>
                    <div className="description">
                        {product.description}
                    </div>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col sm={6}>Price:</Col>
                                <Col sm={6}>${product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col sm={6}>Status</Col>
                                <Col sm={6}>{product.countInStock>0?"In Stock":"Out Of Stock"}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary btn-block" disabled={product.countInStock===0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Section>
    )
}

export default ProductScreen