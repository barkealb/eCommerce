import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MenCard from './MenCard'

function MenPageDetails() {
    const { id } = useParams();
    // console.log(`ID is`, id)

    const [man, setMan] = useState([])
    console.log(man)

    //code axios get to request with id 


  function getMan(){
    axios.get(`/men/${id}`)
    .then(res => setMan(res.data))
    .catch(err => console.log(err))
  }

    useEffect(() => {
        getMan()
    },[])

  return (
    <div className=' men card-wrapper'>
    <img src={man.image} alt={man.title}/>
      <h3>Title: {man.title}</h3>
      <p>Price:{man.price}</p>
      <button>Add to Cart</button>
  </div>
  )
}

export default MenPageDetails