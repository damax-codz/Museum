import './Button.css'
import { motion } from 'framer-motion'
import React from 'react'

const Button = (props) => {
  return (
    <div className='butt'>
       <motion.button  whileTap={{ scale: 0.9 }}>{props.name}</motion.button> 
    </div>
  )
}

export default Button