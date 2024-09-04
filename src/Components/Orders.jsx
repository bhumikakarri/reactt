import React from 'react'
import Header from './Header'
import Head from './Head' 
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Orders() {
  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
      <Row>

      <Col sm={12}>
        <Head/>
        </Col>
      </Row>
      <Row>
      <Col sm={2}><Header/></Col>
      <Col sm={10}>
     
      <div className='sb'>
        <div className='t'>
        <img src='https://a-mart.axiomthemes.com/wp-content/uploads/2019/03/logo2_retina.png'></img>
        </div>
    
     <Row>
        <Col>
          <Row>
         
           <div className='dd'>
            <Col sm={2} className='er'>
            
            <img src='https://i.chaldn.com/_mpimage/avocado-fruit-net-weight-50-gm-700-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30217&q=best&v=1&m=400'></img>
            </Col>
           
            <Col sm={4} className='rt' >
            <h4>organic fruits and vegetables</h4>
            <p>delivered on october-24</p>
            <h4>Rate this product<h2><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/></h2></h4>
            <button className='ss'>RE-ORDER</button>
           
            
            </Col>
            </div>
            
          
            
          
          </Row>
          <Row>
          <div className='dd'>
            <Col sm={2} className='er'>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAc3nWe3VgAh_TyJ-dUUwuHJgy-vBlZOiWeEj6qfZh24OsKMlOxiOAVHodHnhyhZvuZI&usqp=CAU'></img>
            
            </Col>
            <Col sm={4} className='rt' >
            <h4>organic fruits and vegetables</h4>
            <p>delivered on october-24</p>
            <h4>Rate this product<h2><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/></h2></h4>
            <button className='ss'>RE-ORDER</button>
           
            
            </Col>
            </div>
           
          </Row>
          <Row>
          <div className='dd'>
            <Col sm={2} className='er'>
            
            <img src='https://www.thegoodmoodfood.com.au/siteassets/foods/green/broccoli-lg.png'></img>
            
            </Col>
            <Col sm={4} className='rt' >
            <h4>organic fruits and vegetables</h4>
            <p>delivered on october-24</p>
            <h4>Rate this product<h2><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/></h2></h4>
            <button className='ss'>RE-ORDER</button>
           
            
            </Col>
            </div>
          
          </Row>
          <Row>
          <div className='dd'>
        
            <Col sm={2} className='er'>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdRbaCTU8mEvcfkQuUoZZgdWWT27XPEhZ33QVdGno_erBZszHnGEtdsWgF-eh5aySMDs&usqp=CAU'></img>
            
            </Col>
            <Col sm={4} className='rt' >
            <h4>organic fruits and vegetables</h4>
            <p>delivered on october-24</p>
            <h4>Rate this product<h2><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/></h2></h4>
            <button className='ss'>RE-ORDER</button>
           
            
            </Col>
            </div>
        
          
          </Row>
        
         
        
        </Col>
        </Row>
      
    
    </div>
      </Col>
      </Row>
    </div>
    </div>
  )
}

export default Orders


