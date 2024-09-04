import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='one'>
     <ul>
     <Link to='/home' ><li>home</li> </Link>
      <Link to='/About'> <li>product</li></Link>
      <Link to='/Blog'> <li>blog</li></Link>
      <Link to='/Contact'> <li>contact</li></Link>
     <Link to='/service'> <li>services</li></Link>
     <Link to='/orders'><li>orders</li></Link>
     <Link to='/logout'> <li>logout</li></Link>
        </ul> 
    </div>
  )
}

export default Header


