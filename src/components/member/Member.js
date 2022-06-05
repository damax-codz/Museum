import React from 'react'
import Nav from '../Navbar/Nav'
import './member.css'
import fruit from './../images/fruit.png'
import Button from '../button/Button'

const Member = () => {
  return (
      <>
      <Nav />
    <div className='member'>
        <div className='topimage'>
            <p>
                Your Museum. <br></br>
                Your Bounty Of Experience.
            </p>
            <img src={fruit} alt='fruit' />
        </div>
        <p className='choose'>Choose the membership that's  the best for you.<br></br> Click on a level to view the full description of benefits</p>

        <div className='memberstatus'>

            <div>
                <span>
                    Individual - $75 <br></br>
                    <p>$60 tax deductible</p>
                </span>
                 <p>&gt;</p>
            </div>
            <div>
                <span>
                    Dual - $125 <br></br>
                    <p>$60 tax deductible</p>
                </span>
                 <p>&gt;</p>
            </div>
            <div>
                <span>
                    Supporter - $300 <br></br>
                    <p>$60 tax deductible</p>
                </span>
                 <p>&gt;</p>
            </div>
        </div>

        <div className="memberbut">
                <Button name="Join Today" />
        </div>
    </div>
      </>
  )
}

export default Member