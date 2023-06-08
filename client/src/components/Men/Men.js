import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import MenCard from './MenCard'
import Footer from '../Footer'



function Men() {

  const [ men, setMen ] = useState([])

  function getMen() {
    axios.get(`/men`)
    .then ( res => setMen(res.data))
    .catch ( err => console.log(err))
  }

  useEffect(() => {
    getMen()
  }, [])

  return (
    <div>
      <div className='men product-container'>
      {men.map(item => {
        return <MenCard
        key={item._id}
        {...item}
        />
      })}
    </div>
    <Footer/>
    </div>
  )
}

export default Men