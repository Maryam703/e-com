import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const HandleSubmit= (e) => {
       e.preventDefault()
    }

  return (
    <>
    <div className="container-form">

<div className='Login-account'>
        <p className="para">Don't have an account?</p>
        <Link className="link" to="/SignUp"> SignUp here</Link>
      </div>

     <form className="form" onSubmit={HandleSubmit}>
        <input 
        label='Email'
        type='email'
        placeholder='Entre your Email'
        className="inputs"
        value={email}
        onChange = {(e) => setEmail(e.target.value)} />
        <input 
        label='Password'
        type='pasword'
        placeholder='Entre your Password'
        className="inputs"
        value={password}
        onChange = {(e) => setPassword(e.target.value)} />

        <button className="btn"> Sign In</button>
     </form>
    </div>
    </>
  )
}

export default Login
