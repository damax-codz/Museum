import React, { useState } from 'react'
import './nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendarDays, faCartShopping, faCube, faGift, faIdCard, faMagnifyingGlass, faShapes, faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Nav = (props) => {
    
     function Slide(){
         let slide = document.querySelector('.slider')
         let slideitem = document.querySelectorAll('.slideitem')
         
         if(slide.style.width === '85%'){
             slide.style.width= '0%'
             slideitem.forEach(item=>item.style.display='none')
         }
         else{
             slide.style.width='85%'
             slideitem.forEach(item=>setTimeout(()=>item.style.display='flex',300))

         }

    }
  return (
      <>
    <div className='slider'>
      <div className='slideitem'> <FontAwesomeIcon icon={faMagnifyingGlass} className='slideicon'/> <input type='text' placeholder='search' /> </div> 
      <Link to='/Museum/home'> <div className='slideitem'> <FontAwesomeIcon icon={faCalendarDays} className='slideicon'/> <span>Exhibition & Events</span> </div> </Link>
      <Link to='/Museum/cart'> <div className='slideitem'> <FontAwesomeIcon icon={faCartShopping} className='slideicon'/> <span>Cart</span> </div> </Link>
      <Link to='/Museum/collection'> <div className='slideitem'> <FontAwesomeIcon icon={faCube} className='slideicon'/> <span>Collections</span> </div> </Link>
      <Link to='/Museum/ticket'> <div className='slideitem'> <FontAwesomeIcon icon={faTicketSimple} className='slideicon'/> <span>Plan Your Visits</span> </div> </Link>
      <Link to='/Museum/member'> <div className='slideitem'> <FontAwesomeIcon icon={faIdCard} className='slideicon'/> <span>Become a Member</span> </div> </Link>
      <Link to='/Museum/shop'> <div className='slideitem'> <FontAwesomeIcon icon={faGift} className='slideicon'/> <span>Shop</span> </div> </Link>

    </div>
    <div className='nav' style={{color:props.color}}>
    <div className='navigate'>
        <span className='logo'><p>THE ART MUSEUM</p></span>
        <ul>
        <Link to='/Museum/home'>  <li>Events</li> </Link>
        <Link to='/Museum/cart'>  <li>Cart</li> </Link>
        <Link to='/Museum/collection'>  <li>Collections</li> </Link>
        <Link to='/Museum/ticket'>  <li>Plan</li> </Link>
        <Link to='/Museum/member'> <li>Member</li> </Link>
        <Link to='/Museum/shop'>  <li>Shop</li> </Link>
        </ul>
        <div className='menu' onClick={Slide} set>
        <FontAwesomeIcon icon={faBars}  className='bars'/>
        </div>
    </div>
    </div>
    </>

  )
}

export default Nav