import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import KidsCard from './KidsCard';
import Footer from '../Footer';

function Kids() {
    const [kids, setKids] = useState([])

    function getKids(){
        axios.get('/kids')
        .then(res => setKids(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getKids()
    }, [])

  return (
    <div>
        <div className='kids product-container'>
        {kids.map(item => {
            return <KidsCard 
            key={item._id}
            {...item}
            />
        })
        }
    </div>
    <Footer/>
    </div>
    
  )
}

export default Kids