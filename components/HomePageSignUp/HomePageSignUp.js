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
  
  const [submitted, setSubmitted ] = useState(false)
  const [formVaild, setFormValid] = useState(false)

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
  
  const sumbitForm = (e) =>{
    e.preventDefault()
    if (values.firstName && values.lastName && values.email && values.username && values.password) {
      setFormValid(true)
    }
      setSubmitted(true)
  
  }

  return (
    <>
        <form  onSubmit={sumbitForm}>
         {submitted && formVaild ? <div>Thanks!</div> : null} 
        <input  type='text'  value={values.firstName} onChange={firstNameChange} placeholder='First Name' id='Name'/>
       
       {submitted && !values.firstName ? <div>Please Enter Your First Name</div> : null } 
       
        <input type='text' value={values.lastName}  onChange={lastNameChange}  placeholder='Last Name'/>
       {submitted && !values.lastName ? <div>Please Enter Your last Name</div> : null } 

        <input type='email' value={values.email}        onChange={emailChange}  placeholder='Enter Your Email'/>
        {submitted && !values.email ? <div>Please Enter Your Email</div> : null}

        <input type='text' value={values.username}      onChange={usernameChange}  placeholder='MAke an Username'/>
       {submitted && !values.username ? <div>Please Make An Username</div> : null} 

        <input type='password' value={values.password}  onChange={passwordChange}  placeholder='Make An Password'/>
       {submitted && !values.password ? <div>Please Make An Password</div> : null} 

        <button type='submit'>Submit</button>
        </form>
        <button >Login Page</button>
    </>
    )
}
