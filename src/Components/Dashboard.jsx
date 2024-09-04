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
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';





const data = [
  {
    src: 'https://cdn.pixabay.com/photo/2017/04/04/01/08/fruits-2200001_1280.jpg',
    title: 'Straberry',
    description: '4.21M views',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/07/20/18/40/apricots-2523272_1280.jpg',
    title: 'Berry',
    description: '4.74M views',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/12/17/18/51/persimmon-1914127_1280.jpg',
    title: 'Orange',
    description: '3.98M views',
  },
  {
    src: 'https://www.freshorganics.com.au/wp-content/uploads/2016/07/grannysmith.jpg',
    title: 'APPLE',
    description: '3.98M views',
  },
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
        <Col sm={6}>
        <h3 className='t4'>Orgado</h3>
    <div className='ts'>
    
<Row>

<Col sm={6}>

<div className='in'>
<Carousel>
<Carousel.Item interval={600}>
<img
  className="d-block w-100"
  src='https://as1.ftcdn.net/v2/jpg/02/90/27/82/1000_F_290278260_DWUXHMOm8XCCKO4JwtoXMiv7LoJb0hu3.jpg'
  alt="First slide"
/>
<Carousel.Caption>
 

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
<img
  className="d-block w-100"
  src=' https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/Organic-food-v-2-resized.jpg'
  alt="Second slide"
/>
<Carousel.Caption>
 
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src='https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/5/1/0/7/2097015-1-eng-GB/Why-do-people-buy-organic-Separating-myth-from-motivation.jpg'
  alt="Third slide"

/>
<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
</Carousel>
<p>Orgado fruits are very naturally grow we are not usin pesticides</p>
<p></p>
<p></p>
<p>Organic foods include fresh produce, meats, and dairy products as well as processed foods such as fruits frozen meals.

</p>
<p></p>

<button className='btn2'> Go some where</button>
</div>




</Col>
</Row>
</div>
<h1> items </h1>
<Card variant="outlined" sx={{ width: 500, p: 0 }}>
<List sx={{ py: 'var(--ListDivider-gap)' }}>
{data.map((item, index) => (
  <React.Fragment key={item.title}>
    <ListItem>
      <ListItemButton sx={{ gap: 2 }}>
        <AspectRatio sx={{ flexBasis: 200 }}>
          <img
            srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=1 1x`}
            src={`${item.src}?w=120&fit=crop&auto=format`}
            alt={item.title}
          />
        </AspectRatio>
        <ListItemContent>
          <Typography sx={{ fontWeight: 'md' }}>{item.title}</Typography>
          <Typography level="body-sm">{item.description}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
    {index !== data.length - 1 && <ListDivider />}
  </React.Fragment>
))}
</List>
</Card>



 
    
    

   
        
        </Col>
        <Col sm={6}>
        <h3 className='t4'>Recent customers</h3>
        
        
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
<div className='ez'>
<Row>
<Col sm={6}>

<BarChart
      xAxis={[{ scaleType: 'band', data: ['vegetables cells', 'fruits sells', 'both'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={400}
    />
   <p>4months comparison cells</p>

   



</Col>



</Row>





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
