import React from 'react'
import Nav from '../Navbar/Nav'
import './collection.css'
import art1 from './../images/art1.jpg'
import art2 from './../images/art2.png'
import art3 from './../images/art3.png'
import art4 from './../images/art4.png'
import art5 from './../images/art5.png'
import art6 from './../images/art6.png'

const Collection = () => {
  return (
      <>
      <Nav />
    <div className='collection'>
        <div className='search'>
            <input type='text' placeholder='Explore The Collection' />
        </div>
        <div className='artcollection'>
            <div>
                <img src={art1} alt='art1' />
                <p>DECORATIVE ARTS & CRAFTS</p>
            </div>
            <div>
                <img src={art2} alt='art2' />
                <p>AMERICAN IMPRESSIONISM</p>
            </div>
            <div>
                <img src={art3} alt='art3' />
                <p>DE STIJL</p>
            </div>
            <div>
                <img src={art4} alt='art4' />
                <p>CUBISM</p>
            </div>
            <div>
                <img src={art5} alt='art5' />
                <p>AMERICAN</p>
            </div>
            <div>
                <img src={art6} alt='art6' />
                <p>GREEK ANTIQUITIES</p>
            </div>
            <div>
                <img src={art1} alt='art1' />
                <p>DECORATIVE ARTS & CRAFTS</p>
            </div>
            <div>
                <img src={art2} alt='art2' />
                <p>AMERICAN IMPRESSIONISM</p>
            </div>
            <div>
                <img src={art3} alt='art3' />
                <p>DE STIJL</p>
            </div>
            <div>
                <img src={art4} alt='art4' />
                <p>CUBISM</p>
            </div>
            <div>
                <img src={art5} alt='art5' />
                <p>AMERICAN</p>
            </div>
            <div>
                <img src={art6} alt='art6' />
                <p>GREEK ANTIQUITIES</p>
            </div>
        </div>


    </div>
      </>
  )
}

export default Collection