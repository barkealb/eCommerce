import React from 'react'
import { useState, useEffect} from 'react';
import axios from 'axios';
import WomenCard from './WomenCard'
import Footer from '../Footer';

function Women() {
    const [women, setWomen] = useState([])

    function getWomen(){
        axios.get('/women')
        .then(res => setWomen(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getWomen()
    }, [])

  return (
    <div>
      <div className='women product-container'>
    {women.map(item => {
        return <WomenCard
        key={(item._id)}
        {...item}
        />
    })

    }
    </div>
    <Footer/>
    </div>
    
  )
}

export default Women