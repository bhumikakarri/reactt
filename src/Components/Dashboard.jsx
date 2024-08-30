import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Head from './Head'
import StarIcon from '@mui/icons-material/Star';
import { PieChart } from '@mui/x-charts/PieChart';
import PanToolIcon from '@mui/icons-material/PanTool';
import { BarChart } from '@mui/x-charts/BarChart';




const data = [
  { id: 0, value: 10, label: 'selling fruits' },
  { id: 1, value: 15, label: 'selling vegetables' },
  { id: 2, value: 20, label: 'both sells' },
];


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


function Dashboard() {
  return (
    <div className='data'>
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
      <div>
      <Row>
        <Col sm={6}>
   
    <div className='ch'>
      <h4>Shortcut report</h4>
        <div className='sh'>
        <div className='short'>
        <h3>$0</h3>
          <p>Today sells</p>
          <button>+65%</button>
        </div>
        <div className='short2'>
        <h3>$50</h3>
          <p>Today sells</p>
          <button>+65%</button>
        </div>
        </div>   
        <div className='sh1'>
        <div className='short1'>
          <h3>$40</h3>
          <p>Today sells</p>
          <button>+65%</button>
        </div>
        <div className='short3'>
         <h3>$80</h3>
          <p>Today sells</p>
          <button>+65%</button>
        </div>
        </div>

  


    </div>
    <div className='tt'>
    <Row>
  <Col sm={6}>
  
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
      width={580}
    />
    
    </Col>
    </Row>
    </div>
    

   
        
        </Col>
        <Col sm={6}>
        <h3>recent customers</h3>
        
        
       <div className='recc'>
          <div className='rec'>

          <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'></img>
          <h4>Dhanvi.md
          <h2><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></h2><p>fresh fruits</p>         
          </h4>
          
        <Link to='/View'> <button  className='btn btn-primary'>view </button></Link> 
        
        
        </div>
        <div className='rec'>

<img src='https://photosvibe.in/wp-content/uploads/cute-girl-pic11.jpg'></img>
<h4>Meenu.md
<h2><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></h2><p>fresh fruits</p> </h4>
<button  className='btn btn-primary'>view </button>


</div>
<div className='rec'>

<img src='https://cdn.pixabay.com/photo/2021/03/27/19/25/alone-boy-6129399_640.jpg'></img>
<h4>Vishal.md
<h2><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></h2><p>fresh fruits</p></h4>
<button  className='btn btn-primary'>view </button>

</div>
<div className='rec'>

<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOy8T2bNz8A2GW3lNUsOT8nn73VN8GzTW4g&s'></img>
<h4>Kranth.md
<h2><StarIcon/><StarIcon/><StarIcon/><StarIcon/></h2><p>fresh fruits</p>
</h4>
<button className='btn btn-primary'>view </button>

</div>
</div>
         
        </Col>
      </Row>
    </div>
      </Col>
     </Row>
    </div>
  )
}

export default Dashboard
