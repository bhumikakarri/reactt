import React from 'react'
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import Header from './Header'
import Head from './Head'
function Service() {
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
    <h1>services</h1></Col>
   </Row>
    </div>
  )
}

export default Service
