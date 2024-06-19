import { useState } from "react"
import React from 'react'
import './SignUp.css'
import { Link } from "react-router-dom"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
   
    const HandleSubmit= (e) => {
       e.preventDefault()
    }

  return (
    <div className="container-form">

<div className='Login-account'>
        <p className="para">Already have an account?</p>
        <Link className="link" to="/Login"> Login here </Link>
      </div>

     <form className="form" onSubmit={HandleSubmit}>
     <input 
        label='Name'
        type='name'
        placeholder='Entre your FullName'
        className="inputs"
        value={name}
        onChange = {(e) => setName(e.target.value)} />
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

        <button className="btn"> Sign Up</button>
     </form>
    </div>
  )
}
