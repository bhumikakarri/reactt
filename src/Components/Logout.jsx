import React from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Head from './Head'
function Logout() {
  return (
    
      <div>
      <Row>
        <Col sm={12}>
        <Head/>
        </Col>
      </Row>
     <Row>
      <Col sm={2}>
      <Header/>
      </Col>
      <Col sm={10}>
    
      <div className='three'>
        <h1>LOGOUT</h1>
       
    
          <p>ARE YOU SURE LOGOUT</p>
          <Link to='/'><button>LOGOUT</button></Link>
          
        </div>
      
      
    
      </Col>
     </Row>
     </div>
   
  )
}

export default Logout
