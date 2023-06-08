import React from 'react'

function WomenCard(props) {
  return (
    <div className=' women card-wrapper'>
        <img src={props.image} alt={props.title}/>
        <h3>Title: {props.title}</h3>
        <p>Price:{props.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default WomenCard