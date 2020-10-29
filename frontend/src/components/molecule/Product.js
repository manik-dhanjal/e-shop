import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
// import products from "../../products"
import Cards from "./Cards"
import axios from "axios"
const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(()=>{
        const  APIcall= async  ()=>{
            const {data} = await axios.get("/api/product")
            setproducts(data)
        }
        APIcall()
    })
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product=>(
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Cards product={product}/>
                </Col>
            ))}

        </Row>
      </>
    )
}

export default Products
