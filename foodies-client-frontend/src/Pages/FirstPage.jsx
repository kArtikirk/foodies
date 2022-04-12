import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Orders from './Orders/Orders';
import Menu from './Menu/Menu';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Reservation from './Reservation/Reservation';
import HoursAndLocation from './HoursAndLocation/HoursAndLocation';

function FirstPage() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/register' element={<Register/>}/>
            <Route path ='/orders' element={<Orders/>}/>
            <Route path ='/menu' element={<Menu/>}/>
            <Route path ='/about' element={<AboutUs/>}/>
            <Route path ='/contact' element={<Contact/>}/>
            <Route path ='/reservation' element={<Reservation/>}/>
            <Route path ='/hours-and-location' element={<HoursAndLocation/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>        
  )
}

export default FirstPage