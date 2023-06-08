import React from 'react'
import { Link } from 'react-router-dom'

function MenCard(props) {
  return (
    <div className=' men card-wrapper'>
      <Link to={`/men/${props._id}`}>
      <img src={props.image} alt={props.title}/>
      </Link>
        <h3>Title: {props.title}</h3>
        <p>Price:{props.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default MenCard