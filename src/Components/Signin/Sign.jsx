import React, { useEffect, useState } from 'react'
import './Signin.css'
 import Google from '../../Images/google.png'
 import Apple from '../../Images/apple.png'

 import {auth,provider} from '../../GoogleSignin/Config'
import {signInWithPopup} from 'firebase/auth'
import DashBoardPage from '../../Pages/DashBoardPage'
import Home from '../Home/Home'


const Sign = () => {
const [value,setValue]=useState('')
  const handleGoogleSignin =()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
}

useEffect (()=>{
  setValue(localStorage.getItem('email'))
})

  return (
    <div className=' singin'>
{value?<DashBoardPage/>:

<div className='SigninPage'>
  <div className='HomeParent'><Home/></div>

  
 
<div className='SignInParent'>
        <div className="SignInContainer">

<h1>
    Sign In
</h1>

<p>
    Sign in to your account.
</p>

<div className='Google-Apple-signin'>
<button className='Signin_btn' onClick={handleGoogleSignin}>
<img src={Google} alt="" />
Sign in with Google
</button>
<button className='Signin_btn' >
<img src={Apple} alt="" />
Sign in with Apple
</button>
</div >


<div className='loginForm'>

<div className='EmailContainer'>
<label htmlFor="email">Email</label>
<input type="email"  />
</div>

<div className='PassContainer'>
<label htmlFor="password">Password</label>
<input type="password"  />
</div>

<div className='forgotPass'>
<p>Forgot Password?</p>
</div>
<button>
    Sign In
</button>

<div className='DHAC'>
  <p id='p1'>Don't have an account?</p>

<p id="p2">Register here</p>
</div>

</div>
        </div>
        </div>
        </div>
}

    </div>
  )
}

export default Sign;