import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import Person2Icon from '@mui/icons-material/Person2';
function Login() {
  return (
    <div>
      

      <Row>
        <Col sm={8} className='imm'>

        <img src='https://img.freepik.com/free-psd/bio-food-square-banner-template_23-2148211560.jpg?w=740&t=st=1724721846~exp=1724722446~hmac=5129ee7230a305ecf67aa4f03ff55af2d2c11137a94f1da817b79ab1ce444af6'/>
        
        </Col>
        <Col sm={4}>
        <div className='block22'>
            <h1>Login</h1>
          
            <h3>
            <Person2Icon/> Username</h3>
            <input type='text'/>
            
            <h3>
            <HttpsIcon/> Password</h3>
            <input type='number'/>
            <p></p>
          
          <p>don,t have an account?<Link to='Signup/'> signup</Link></p>
          <p></p>
         <Link to='/Dashboard'>  <button>Login</button></Link> 
        </div>
        
        </Col>
      </Row>
    </div>
  )
}

export default Login