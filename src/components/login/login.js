import React from 'react'
import './login.css'
import { motion } from "framer-motion"
import blur from '../images/Background Image.png'
import Button from '../button/Button'


const Login = () => {


  function Login(){
     window.location='/Museum/home'
  }



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
                <Button name='Log In' /> 
                </div>
                <span>Dont have an account ?</span>
            </div>
            
        </div>
    </div>
  )
}

export default Login