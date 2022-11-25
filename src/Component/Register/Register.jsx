import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';


export default function Register() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: ''
  })
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.id] = e.target.value;
    setUser(myUser);
  }
  async function postDate() {
    let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', user)
    if (data.message == 'success') {
      setIsLoading(true)
      navigate('/login')

    }
    else {
      setError(data.message)
      setIsLoading(true)
    }
  }
  function hasFormSubmit(e) {
    e.preventDefault();
    setIsLoading(false)
    let validate = validateRegisterForm();
    if (validate.error) {
      setErrorList(validate.error.details)
      setIsLoading(true)
    }
    else {
      postDate();
    }

  }

  function validateRegisterForm() {
    let scheme = Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
    return scheme.validate(user, { abortEarly: false })
  }

  return <>
    <section>
      <div className="container pt-5 mt-5">
        <div className="row shadow">
          <div className="col-lg-6 d-none d-lg-block bg-login"></div>
          <div className="col-lg-6 py-5 bg-dark">
                  {errorList.map((error) => {
                    if (error.context.label == 'password') {
                      return <div className='text-alert text-danger'>Password is wrong</div>
                    }
                    else {
                      return <div className='text-alert text-danger'>{error.message}</div>
                    }
                  })}
            <div className="text-center"><h1 className="h4 text-gray-900 mb-4">Create My Account!</h1></div>
            <form onSubmit={hasFormSubmit}>
              <div className="row gy-3">
                <div className="col-sm-6"><input type="text" onChange={getUserData} className='form-control my-input' name='first_name' id='first_name' placeholder='FirstName' /></div>
                <div className="col-sm-6"><input type="text" onChange={getUserData} className='form-control my-input' name='last_name' id='last_name' placeholder='LastName' /></div>
                <div className="col-12"><input type="number" onChange={getUserData} className='form-control my-input' name='age' id='age' placeholder='Age' /></div>
                <div className="col-12"><input type="email" onChange={getUserData} className='form-control my-input' name='email' id='email' placeholder='Email' /></div>
                <div className="col-12"><input type="password" onChange={getUserData} className='form-control my-input' name='password' id='password' placeholder='Password' /></div>
                <div className="col-12 text-center"><button className='btn btn-info my-2 w-100 fw-bold' type='submit'> {isLoading == false ? <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i> : 'Create Account'}</button></div>
              </div>
            </form>
            <div className="text-center mt-2"><div className="text-muted small">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-primary">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-primary">Terms of Service</a> apply.</div></div>
            <hr></hr>
            <div  className="text-center"><span  className="small">Already a member?</span><Link  to="/login" className="small a2 cursor ms-2 text-primary">Log In<i  className="fas fa-chevron-right small"></i></Link></div>
          </div>

        </div>
      </div>
    </section>
  </>
}
