import React from 'react'
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import Header from './Header'
import Head from './Head'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
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
   <div className='diy'>
   <h2>Organic services</h2>
   <p>Organic Food LTD offers wide range of services including marketing, design and development,

analysis and strategies, planing and developing the future project.
</p>
   </div>
   <div className='diy1'>
    <Row>
      <Col sm={5} className='dr'>
   <h1>30 </h1>
   </Col>
   <Col sm={5} className='ab'>
   <h2>Years of Industry Experience</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
   </Col>
   </Row>
   </div>
   <Row>
<div className='cd'>
    <Col sm={4} className='bc'>
    <img src='https://zomata-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.fd66477b.jpg&w=384&q=75'></img>
    <h3>Blackcurrant Vegetables</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
    
    </Col>
    <Col sm={4} className='bc'>
    <img src='https://zomata-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.bbc29aeb.jpg&w=384&q=75'></img>
    <h3>Blackcurrant Vegetables</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
    </Col>
    <Col sm={4} className='bc'>
    <img src='https://zomata-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.10a69f92.jpg&w=384&q=75'></img>
    <h3>Blackcurrant Vegetables</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p></Col>
    </div>
   </Row>
   <Row>
   
   <Col sm={6} className='gd'>
    <img src='https://zomata-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.fed19a58.png&w=640&q=75'></img>
    </Col>
    <Col sm={6} className='bd'>
    <h1>Zomata Organic
    Going Green</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit</p>
    </Col>
   </Row>
    </Col>
   </Row>
    </div>
  )
}

export default Service
