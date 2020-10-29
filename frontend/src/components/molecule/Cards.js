import React from 'react'
import { Card,Button } from 'react-bootstrap'
import Ratings from '../atom/Ratings'
import {Link} from "react-router-dom"
const Cards = ({product}) => {
    return (
       <Card className="my-3  ">
           <Link to={`/product/${product._id}`}> <Card.Img variant="top" src={product.image} /></Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}> <Card.Title>{product.name}</Card.Title>  </Link>
                <Card.Text as='div'>
                   
                    <div className="py-2">
                    <Ratings rate={product.rating} review={product.numReviews}/>
                    </div>
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
                <Button variant="primary btn-block">Add To Cart</Button>
            </Card.Body>
            
       </Card>
    )
}

export default Cards
