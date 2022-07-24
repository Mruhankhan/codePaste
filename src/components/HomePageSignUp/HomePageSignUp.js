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
        <h1>Welcome to codePaste</h1>
          <div>
         {submitted && formVaild ? <></> : null} 
        <input  type='text'  value={values.firstName} onChange={firstNameChange} placeholder='First Name' id='Name'/>
       {submitted && values.firstName.length < 4 ? <div class='div-not-entered'>Add 4 Or More Characters</div> : null }
       
        <input type='text' value={values.lastName}  onChange={lastNameChange}  placeholder='Last Name'/>
       {submitted && values.lastName.length < 4 ? <div class='div-not-entered'>Username needs 4 Or More Characters</div> : null } 

        <input type='email' value={values.email}        onChange={emailChange}  placeholder='Enter Your Email'/>
        {submitted && !values.email ? <div class='div-not-entered'> Please Enter Your Email</div> : null}

        <input type='text' value={values.username}      onChange={usernameChange}  placeholder='Make an Username'/>
       {submitted && values.username.length < 4 ? <div class='div-not-entered'>Please Enter More Then 4 Characters</div> : null} 

        <input type='password' value={values.password}  onChange={passwordChange}  placeholder='Make An Password'/>
       {submitted && values.password.length < 4 ? <div class='div-not-entered'>Password needs To be atleast 4 Characters </div> : null} 

        <button type='submit'>Sign Up!</button>
        </div>
        </form>
    </>
    )
}
