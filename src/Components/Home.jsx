import React from 'react'
import Row  from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import Header from './Header'
import Head from './Head'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
       <Row>
        <Col sm={12}>
        <Head/>
        </Col>
      </Row>
    <Row>
    
     
     <Row>
  <Col sm={2}><Header/></Col>
  <Col sm={10}>
    <div className='image-container'>
      <img src='https://img.freepik.com/premium-photo/fresh-healthy-grocery-vegetable-food-white-background-organic-product-concept_654181-676.jpg?w=540' alt="Grocery" />

      <div className='marquee'>
        <div className='card1'>
          <Card sx={{ maxWidth: 340 }}>
            <CardMedia
              sx={{ height: 190 }}
              image="http://androthemes.com/themes/react/organista/static/media/6.2c29c37a.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Orange
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              </Typography>
            </CardContent>
            <CardActions>
            
          <Link to='/About'>  <Button size="small" >shop now</Button></Link>  
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  

<Row>
  <Col sm={6}>
  <div className='blow1'>

    <Row>
      <Col sm={6}>
      <div className='blo'>
      <Col sm={2}>
      <img src='http://androthemes.com/themes/react/organista/static/media/2.78a8055e.png'></img></Col>
      
     
      </div>
      </Col>
      
      <Col sm={4}>
      <div className='ble'>
      <h5>Kiwi & Strawberry</h5>
      <p>Cras ultricies ligula sed magna dictum porta. </p>
      <p>19$
      </p>
      <button>shop now</button>
      </div>
    
      </Col>
     
      
      
    </Row>
   

      
   
    
  </div>
  
  </Col>
  <Col sm={6}>
  <div className='blow1'>

    <Row>
      <Col sm={6}>
      <div className='blo'>
      <Col sm={2}>
      <img src='http://androthemes.com/themes/react/organista/static/media/14.23678024.png'></img></Col>
      
     
      </div>
      </Col>
      
      <Col sm={4}>
      <div className='ble'>
      <h5>Grapes</h5>
      <p>Cras ultricies ligula sed magna dictum porta. </p>
      <p>12$</p>
      <button>shop now</button>
      </div>
    
      </Col>
     
      
      
    </Row>
   

      
   
    
  </div>
  
  
  
  </Col>
  
</Row>
<Row>
  <Col sm={6}>
  <div className='blow1'>

    <Row>
      <Col sm={6}>
      <div className='blo'>
      <Col sm={2}>
      <img src='http://androthemes.com/themes/react/organista/static/media/8.de6e1c27.png'></img></Col>
      
     
      </div>
      </Col>
      
      <Col sm={4}>
      <div className='ble'>
      <h5>Lettuce</h5>
      <p>Cras ultricies ligula sed magna dictum porta. </p>
      <p>19$</p>
      <button>shop now</button>
      </div>
    
      </Col>
     
      
      
    </Row>
   

      
   
    
  </div>
  
  </Col>
  <Col sm={6}>
  <div className='blow1'>

    <Row>
      <Col sm={6}>
      <div className='blo'>
      <Col sm={2}>
      <img src='http://androthemes.com/themes/react/organista/static/media/7.89a6a8af.png'></img></Col>
      
     
      </div>
      </Col>
      
      <Col sm={4}>
      <div className='ble'>
      <h5>Ginger</h5>
      <p>Cras ultricies ligula sed magna dictum porta. </p>
      <p>12$</p>
      <button>shop now</button>
      </div>
    
      </Col>
     
      
      
    </Row>
   

      
   
    
  </div>
  
  
  
  </Col>
  
</Row>
</Col>
</Row>

</Row>
    
     </div>
  )
}

export default Home
