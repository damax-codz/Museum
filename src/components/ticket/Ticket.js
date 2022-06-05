import React, { useState } from 'react'
import Button from '../button/Button'
import Nav from '../Navbar/Nav'
import './ticket.css' 

const Ticket = () => {
    const [ adult,setAdult ]  = useState(0)
    const [ senior,setSenior ]  = useState(0)
    const [ student,setStudent ]  = useState(0)
    const [ date,setDate ] = useState(22)

    function increaseAdult(){
        setAdult( adult+1 )
    }
    function decreaseAdult(){
        setAdult( adult-1 )
    }
    function increaseSenior(){
        setSenior( senior+1 )
    }
    function decreaseSenior(){
        setSenior( senior-1 )
    }
    function increaseStudent(){
        setStudent( student+1 )
    }
    function decreaseStudent(){
        setStudent( student-1 )
    }

    function Today(){
       let now =  document.querySelector('.today')
       let next = document.querySelector('.tomorrow')
       let future = document.querySelector('.other')

       now.style.color = 'black'
       next.style.color = 'rgba(0, 0, 0, 0.372)'
       future.style.color = 'rgba(0, 0, 0, 0.372)'

       now.style.borderBottom = '2px solid rgba(255, 71, 58, 1)'
       next.style.borderBottom = 'none'
       future.style.borderBottom = 'none'
       setDate(21)

       now.style.fontSize = '25px'
       next.style.fontSize='20px'
       future.style.fontSize='20px'
    }
    function Tomorrow(){
        let now =  document.querySelector('.today')
        let next = document.querySelector('.tomorrow')
        let future = document.querySelector('.other')
 
        next.style.color = 'black'
        now.style.color = 'rgba(0, 0, 0, 0.372)'
        future.style.color = 'rgba(0, 0, 0, 0.372)'
 
        next.style.borderBottom = '2px solid rgba(255, 71, 58, 1)'
        now.style.borderBottom = 'none'
        future.style.borderBottom = 'none'
        setDate(22)

        next.style.fontSize = '25px'
        now.style.fontSize='20px'
        future.style.fontSize='20px'

    }
    function Other(){
        let now =  document.querySelector('.today')
        let next = document.querySelector('.tomorrow')
        let future = document.querySelector('.other')
 
        future.style.color = 'black'
        next.style.color = 'rgba(0, 0, 0, 0.372)'
        now.style.color = 'rgba(0, 0, 0, 0.372)'
 
        future.style.borderBottom = '2px solid rgba(255, 71, 58, 1)'
        next.style.borderBottom = 'none'
        now.style.borderBottom = 'none'
        setDate(23)
        
        future.style.fontSize = '25px'
        next.style.fontSize='20px'
        now.style.fontSize='20px'
    }
    



  return (
      <>
      <Nav />
    <div className='ticket'>
        <section className='tickethead'>
            <h1>Skip The Line. <br></br> Purchase Tickets</h1>
            <p>All exhibitions , audio tours and films included in the price of admission</p>
        </section>
        <section className='datepick'>
            <div className='pick'>
            <div className='today' onClick={Today}>Today</div>
            <div className='tomorrow' onClick={Tomorrow}>Tomorrow</div>
            <div className='other' onClick={Other}>Other</div>
            </div>
            <div className='date'>
                June {date} 2022<br></br>Open 10:30am-5:30pm
            </div>
        </section>
        <section className='persons'>
            <div>
                <h4>Adults</h4>
                  <div>
                  <span onClick={decreaseAdult}>-</span>
                  <span>{ adult }</span>
                  <span onClick={increaseAdult}>+</span>
                  </div>
            </div>
            <div>
                <h4>Seniors</h4>
                  <div>
                  <span onClick={decreaseSenior}>-</span>
                  <span>{ senior }</span>
                  <span onClick={increaseSenior}>+</span>
                  </div>
            </div>
            <div>
                <h4>Students</h4>
                  <div>
                  <span onClick={decreaseStudent}>-</span>
                  <span>{ student }</span>
                  <span onClick={increaseStudent}>+</span>
                  </div>
            </div>

        </section>

        <section className='purchase'>
            <div className='line'></div>
            <div className='total'>
                <h4>Total</h4>
                <h4>${(40*adult)+(30*senior)+(25*student)}</h4>
            </div>
            <div className="totalbut">
                <Button name="Continue To Payment" />
              </div>
        </section>
    </div>
      </>
  )
}

export default Ticket