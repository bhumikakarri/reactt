import React from 'react'
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import Header from './Header'
import Head from './Head' 
import {productsData} from '../Data/Products'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
       <Row>
        <Col sm={12}>
        <Head/>
        </Col>
      </Row>
   <Row>
  
    <Col sm={2}><Header/></Col>
   
    <Col sm={10}>
   <div className='mainn'>
    {
      productsData.map((item)=>{
        return(
          <div className='card'>

      <Link to={`/about/${item.id}`}>
      <img src={item.image}/>

      </Link>
      
      <p>{"name:"+" "+item.name}</p>
      <p>{"price:"+" "+item.price}</p>
          </div>
        )
      })
    }
   </div>
   
    </Col>
   </Row>
    </div>
  )
}

export default About
