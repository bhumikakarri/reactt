import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import { Col, Row } from 'react-bootstrap'
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Person2Icon from '@mui/icons-material/Person2';
function Signup() {
  return (
    <div>
      

      <Row>
        <Col sm={8} className='imm'>

        <img src='https://img.freepik.com/free-psd/bio-food-square-banner-template_23-2148211560.jpg?w=740&t=st=1724721846~exp=1724722446~hmac=5129ee7230a305ecf67aa4f03ff55af2d2c11137a94f1da817b79ab1ce444af6'/>
        
        </Col>
        <Col sm={4}>
        <div className='block22'>
            <h1>SIGNUP</h1>
          
           <h3>
           <Person2Icon/> Username</h3>
            <input type='text'/>

            <h3>
            <EmailIcon/> E-mail(or)phone number</h3>
            <input type='text'/>
            
            <h3>
              <HttpsIcon/>Password</h3>
            <input type='number'/>
            <p></p>
          
          
          <p></p>
          <Link to='/' ><button>submit</button></Link> 
        </div>
        
        </Col>
      </Row>
    </div>
  )
}

export default Signup
