import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from './Head' 
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div>
      <div className='own'>


        <Row>
        <Col sm={12}>
        <Head/>
        </Col>

        </Row>
    <Row>

        <Col sm={7}>
        <div className='ownn'>
        <h1>Get in touch</h1>
        
        <input type="text" placeholder='Name'></input>   .
        <input type="number" placeholder='Phone'></input>
        
       <h3> <input type="text" placeholder='e-mail'></input></h3>
        <p></p>
        <h4><input type="text" placeholder='message'></input></h4>
        <p></p>
      <Link to='/Dashboard'><button>submit</button></Link>
        </div>
        </Col>
        <Col sm={5}>
        
         <div class="ownn1">

            <h3>Support contact</h3><p></p>
            <h3><h1></h1><ContactPhoneIcon/>    phone</h3>
            <p>
                mobile:(+88)457658890
            </p>
            <p>
                mobile:(+88)4576582220
            </p>
            <h3><AttachEmailIcon />   E-mail</h3>
            <p>

                info@example.com
            </p>
            <p>

             contact@example.com
                </p>
            <h3>
                <AddLocationAltIcon/>    Location</h3>
            <p>vishakapatnam</p>
            
         </div>
        </Col>
    </Row>



      </div>
    </div>
  )
}

export default Contact
