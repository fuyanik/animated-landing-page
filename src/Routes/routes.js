import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from '../Pages/home';


export default function App() {
  return (
  

   <BrowserRouter>
     <Routes>
           <Route path="/" element={<Home/>}/>
     </Routes>
   </BrowserRouter>

  
  
  
    )
}