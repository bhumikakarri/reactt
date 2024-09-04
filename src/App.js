import React from 'react'
import './App.css'

import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Row  from 'react-bootstrap/Row';

import Login from './Components/Login'
import Dashboard  from './Components/Dashboard'
import Signup from './Components/Signup'
import Head from './Components/Head'
import Logout from './Components/Logout'
import Orders from './Components/Orders'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Read from './Components/Read'
import View from './Components/View'

function App() {
  return (
  <div>
    
  <Row>
      <Router>

     
        <Routes>
          <Route path='/react' element={<Login/>}/>
          <Route path='signup/' element={<Signup/>}/>
          <Route path='dashboard/' element={<Dashboard/>}/>
          <Route path='head/' element={<Head/>}/>
          <Route path='home/' element={<Home/>}/>
         <Route path='about/' element={<About/>}/>
         <Route path='blog/' element={<Blog/>}/>
         <Route path='contact/' element={<Contact/>}/>
         <Route path='read/' element={<Read/>}/>
         <Route path='view/' element={<View/>}/>
         
         <Route path='orders/' element={<Orders/>}/>
         <Route path='service/' element={<Service/>}/>
         <Route path='logout/' element={<Logout/>}/>
        

        
        
        </Routes>
      
    </Router>
    </Row>
   
   

    </div>
  )
}

export default App
