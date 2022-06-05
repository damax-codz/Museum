import React from 'react'
import Nav from '../Navbar/Nav'
import './home.css'
import musuem from './../images/Image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/Button'


const Home = () => {


  function Visit(){
    window.location='/Museum/ticket'
  }
  return (
      <>
      <Nav />
    <div className='home'>
      <section className='musuemimage'>
        <img src={musuem} alt='musuem' />
      </section>

      <section className='musuempage'>
        <p>EXHIBITION</p>
        <h3>MASTERS <br></br>OLD AND<br></br>NEW</h3>
        <h4>APRIL 15 -  SEPTEMBER 20</h4>
        <p>FLOOR 5</p>
        <div className='homebut' onClick={Visit}>
        <Button name='Plan Your Visit' />
        </div>
            <div className='homeloc'>
                <span>  
                <FontAwesomeIcon icon={faLocationDot} />
                151 3rd st <br></br> San Francisco,CA 94103</span>
                <span>
                <FontAwesomeIcon icon={faClockFour} />
                Open Today <br></br> 10:00am - 5:30pm</span>
            </div>
      </section>
        
    </div>
      </>
  )
}

export default Home