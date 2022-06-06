import React, { useEffect, useState } from 'react'
import Nav from '../Navbar/Nav'
import './cart.css'
import watch from "./../images/Rectangle 8.png";
import shirt from "./../images/shirt.jpg"
import chain from "./../images/chain.jpg"
import Button from '../button/Button';


const Cart = () => {
    let sum = 0
    let goodsSum = 0
    const cartData = JSON.parse(sessionStorage.getItem('cartItems')) 
    const keys  = Object.keys(cartData)
    const [ prices,setPrices] = useState({
        item1:160,
        item2:150,
        item3:230,
    })
    const [ shopItems,setShopItems ] = useState({
        item1:{
            image:watch,
            name:'Braun Classic Watch'
        },
        item2:{
            image:shirt,
            name:'The Badagry Art'
        },
        item3:{
            image:chain,
            name:'Queen Victoria Bracelet'
        }

    })
    let result = keys.map((item,index)=>
    sum+=prices[item]
    )
    let goods = keys.map((item,index)=>   
    goodsSum+=Number(cartData[item])
    )
    useEffect(()=>{
        console.log(cartData);
        
    })
  return (
      <>
      <Nav />


    <div className='cart'>
        <h2 className='text-left ms-2 mt-5 fs-1 fw-bold' >My order</h2>
       <div className='cartcontainer'>

        {
             keys.map((item,index)=>{
                return(
                    <>
                    <div className='cartItem mt-5 mb-5'>
                        <img src={shopItems[item]["image"]} alt='shopitem'  className='ms-2 me-2'/>
                    <div className=' detail d-flex flex-column justify-content-between'>
                    <h3 className='fw-bold fs-5'>{shopItems[item]["name"]}</h3>
                    <span className='d-flex justify-content-between'><h4>${prices[item]}</h4> <h4>{cartData[item]}x</h4> </span>
                    </div>
                    </div>
                    </>
                    
                    )
                }) 
            }
            </div>

            <div className='tot'>
                <div>
                    <h2>Total</h2>
                    <h2>${sum*goodsSum}
                       
                    </h2>
                </div>

                <div className='cartbut'>
                <Button name="Checkout" />
                </div>
            </div>
        
    </div>
      </>
  )
}

export default Cart