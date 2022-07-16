import React, {useState} from 'react'
import './HomePageSignUp.css'


export default function HomePageSignUp() {

  const [values, newValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
    username:'',
    password:'',
  })
  
  const FirstNameChange = () =>{
    
  }







  return (
    <>
        <form action=''>
        <input  type='text'  value={values.firstName}  placeholder='First Name' id='Name'/>
        <input type='text' value={values.lastName}  placeholder='Last Name'/>
        <input type='email' value={values.email}  placeholder='Enter Your Email'/>
        <input type='text' value={values.username} placeholder='Enter Username'/>
        <input type='password' value={values.password} placeholder='Enter An Password'></input>
        <button type='submit'>Submit</button>
        </form>
        <button >Login Page</button>
    </>
    )
}
