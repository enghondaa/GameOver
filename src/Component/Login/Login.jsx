import axios from 'axios'
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'


export default function Login({saveUserData}) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([])
  const [logInfo, setLogInfo] = useState({
    email: '',
    password: ''
  })
  async function postApi() {
    let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', logInfo)
    console.log(data);
    if (data.message === 'success') {
      localStorage.setItem('userToken', data.token)
      saveUserData();
      navigate('/');
    }
  }
  function getDataInfo(e) {
    let userInfo = { ...logInfo }
    userInfo[e.target.id] = e.target.value;
    setLogInfo(userInfo)

  }
  function postData(e) {
    e.preventDefault();
    let validate = validateRegisterForm();
    if (validate.error) {
      setErrorList(validate.error.details)
    }
    else {
      postApi();
    }

  }
  function validateRegisterForm() {
    let scheme = Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
    return scheme.validate(logInfo, { abortEarly: false })
  }
  return <>
    <section className='mt-4 pt-5'>
      <div className="container p-lg-5">
        <div className="row shadow">
          <div className="col-lg-6 d-none d-lg-block bg-login">

          </div>
          <div className="col-lg-6 bg-dark">
            <div className="login p-5 ">
              <div className='text-center'>
                      <img src="./images/logo.png" alt=""  className='mb-3' height={72}/>
                      <h4 className='mb-3'>Log in to GameOver</h4>
              </div>
              <div>
              {errorList.map((error) => {
                  if (error.context.label === 'password') {
                    return <div className='text-alert text-danger'>Password Should Start with UpperCase</div>
                  }
                  else {
                    return <div className='text-alert text-danger'>{error.message}</div>
                  }
                })}
                {/* {error.length>0 ?<p className='text-alert'>{error}</p>:''} */}
                <form action="" onSubmit={postData}>
                  <input className='form-control mb-3' type="text" id='email' onChange={getDataInfo} placeholder='Email' />
                  <input className='form-control' type="password" id='password' onChange={getDataInfo} placeholder='Password'/>
                  <button className='btn btn-primary  mt-3 w-100' type='submit'>Login</button>
                </form >
              </div>
              <hr />
              <div className='text-center'>
                <Link onClick={()=>{
                  alert('اعمل اميل جديد ياحمار')
                }} className='text-primary'>Forgot password ?</Link>
              </div>
              <div className='text-center'>
                <span> <small>Not a member yet?</small></span>
                <Link to="/register" className="small a2" > Create Account<i className="fas fa-chevron-right small"></i></Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
