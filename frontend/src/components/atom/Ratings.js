import React from 'react'
import styled from "styled-components"
 
const Div = styled.div`
.review{
    padding-left:5px;
}
.ratings{
    color:#f8e825;
}
`
const Ratings = ({rate,review}) => {
    var ratings=rate;
    return (
        <Div>
            <span className="ratings">
            {[...Array(5)].map(()=>{
                ratings--;
                console.log(ratings)
                if(ratings>=0) return (<i className="fas fa-star" key={ratings+review}/>)
                else if(ratings<0&&ratings>-1) return( <i className="fas fa-star-half-alt"  key={ratings+review}/> )
                else return( <i className="far fa-star"  key={ratings+review+rate}/> )
                
            })}
            </span>
            <span className="review">
                from {review} reviews
            </span>
        </Div>
    )
}

export default Ratings
