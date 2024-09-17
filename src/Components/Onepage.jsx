import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../Data/Products'

function Onepage() {
    const {id} = useParams() 
    const dataVal = productsData.find((e)=>e.id === id);
    console.log(id)
  return (
    <div className='boxx'>
        <div className='boxx1'>
      <img src={dataVal.image} alt=""/>
      <p>{dataVal.id}</p><br></br>
      
      <p>{dataVal.name}</p>
      
      <p>{dataVal.price}</p>
     
      </div>
    </div>
  )
}

export default Onepage
