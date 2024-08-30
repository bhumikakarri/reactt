import React from 'react'
import Head from './Head' 
import Header from './Header'
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Blog() {
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
     
     
  
    <div className='bb'>
      <div className='bblock'>

         <img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-09.5a89c4fe.jpg&w=1080&q=75'></img>
         <h4>Things i wish i had know</h4>
          <h4> angular when i started</h4>
          <Link to='/Read'>    <button>Readmore</button></Link>
      </div>
      <div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-03.edd8f8bd.jpg&w=1080&q=75'></img>
  <h4>Unique ideas for healthy food</h4>
  <h4>you  heard it</h4>
 <Link to='/Read'><button>Readmore</button></Link> 
</div>
<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-08.65d67928.jpg&w=1080&q=75'></img>

   <h4>Five data loading </h4>
   <h4>boost web performance</h4>
   <Link to='/Read'> <button>Readmore</button></Link>
</div>
<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-07.24d444b1.jpg&w=1080&q=75'></img>


<h4>Unconscious biases that get in </h4>
<h4>the way of  design</h4>

<Link to='/Read'><button>Readmore</button></Link>


</div>
<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-05.6838761e.jpg&w=1080&q=75'></img>

<h4>Building a retrodraggable web</h4>
<h4>component with lit</h4>
<Link to='/Read'><button>Readmore</button></Link>
</div>

<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-04.d9e6f7c1.jpg&w=1080&q=75'></img>
  <h4>Effective communication for</h4>
  <h4>everyday meetings</h4>
  <Link to='/Read'><button>Readmore</button></Link>
</div>
<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-01.fce3d8b7.jpg&w=1080&q=75'></img>

<h4>Worthy cyber monday organnic </h4>
<h4>food from foodpond </h4>
<Link to='/Read'><button>Readmore</button></Link>
</div>
<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-02.5ca39905.jpg&w=1080&q=75'></img>

<h4>Holiday home delivery we have </h4>
<h4> recently ordered</h4>
<Link to='/Read'><button>Readmore</button></Link>
</div>
<div className='bblock'>

<img src='https://orgado-typescript.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnews-thumb-06.f8d41c49.jpg&w=1080&q=75'></img>

<h4>The realities and myths of</h4>
<h4>contrast and color</h4>
<Link to='/Read'><button>Readmore</button></Link>
</div>
    </div>
    </Col>
    </Row>
    </div>
    
  )
}

export default Blog