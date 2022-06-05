import React from 'react'
import './login.css'
import { motion } from "framer-motion"
import blur from '../images/Background Image.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'


const Login = () => {




  return (
    <div className='login'>
        <img src={blur} alt='background'  />
        <div className='form'>
            <h2>YOUR ART MUSEUM</h2>
            <p>151 3rd St  <br></br>  San Francisco ,CA 94103</p>
            <div>
                <input type='email' placeholder='Email Address' />
                <input type='password' placeholder='Password' />
                <p>Forgot your password?</p>
                <div onClick={Login}>
                 <Link to='/Museum/home'>
                <Button name='Log In' /> 
                  </Link>
                </div>
                <span>Dont have an account ?</span>
            </div>
            
        </div>
    </div>
  )
}

export default Login