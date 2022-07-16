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

  const firstNameChange = (e) =>{
    newValues({...values, firstName: e.target.value })
  }

 

  const lastNameChange = (e) =>{
    newValues({...values, lastName: e.target.value })
  }
  const emailChange = (e) =>{
    newValues({...values, email: e.target.value })
  }
  
  const usernameChange = (e) =>{
    newValues({...values, username: e.target.value })
  }
  const passwordChange = (e) =>{
    newValues({...values, password: e.target.value })
  }
  


  return (
    <>
        <form action=''>
        <input  type='text'  value={values.firstName} onChange={firstNameChange} placeholder='First Name' id='Name'/>
        <input type='text' value={values.lastName}  onChange={lastNameChange}  placeholder='Last Name'/>
        <input type='email' value={values.email}        onChange={emailChange}  placeholder='Enter Your Email'/>
        <input type='text' value={values.username}      onChange={usernameChange}  placeholder='Enter Username'/>
        <input type='password' value={values.password}  onChange={passwordChange}  placeholder='Enter An Password'></input>
        <button type='submit'>Submit</button>
        </form>
        <button >Login Page</button>
    </>
    )
}
