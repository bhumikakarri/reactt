import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookIcon from '@mui/icons-material/Book';
import CallIcon from '@mui/icons-material/Call';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
function Header() {
  return (
    <div className='one'>
     <ul>
     <Link to='/home' className='cc' ><li><HomeIcon />hme</li> </Link>
      <Link to='/About' className='cc' > <li> <ProductionQuantityLimitsIcon/>product</li></Link>
      <Link to='/Blog' className='cc' > <li><BookIcon />blog</li></Link>
      <Link to='/Contact' className='cc' > <li><CallIcon/>contact</li></Link>
     <Link to='/service' className='cc' > <li>< MiscellaneousServicesIcon/>services</li></Link>
     <Link to='/orders' className='cc' ><li><BorderStyleIcon/>orders</li></Link>
     <Link to='/logout' className='cc' > <li>logout</li></Link>
        </ul> 
    </div>
  )
}

export default Header


