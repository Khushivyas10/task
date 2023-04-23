import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState(false)

  const validated=()=> {
    if (email == 'test123@gmail.com' && password == 'Test@123') setValidate(true)
  }
  const submitHandler = (event) => {
    // console.log(email,password)
    event.preventDefault()
    { validate ? navigate('/home') : alert('Enter correct credentials') }
  }
  return (
    <div className='login' onSubmit={submitHandler}>
      <span className="loginTitle">
        Login
      </span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} className='loginInput' placeholder='Enter your email..' />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} className='loginInput' placeholder='Enter your password..' />

        <button className='loginButton' onClick={validated}>Login</button>
      </form>
    </div>
  )
}

export default Login