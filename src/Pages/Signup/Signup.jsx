import React from 'react'
import './Signup.css'



const Login = () => {
    return (
        <>
            <form className='container form-containers'>
                <div className="form-itemss">
                <div class="form-groups">
                    <label for="name">Name</label>
                    <input placeholder='XYZ' pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" id="email" required type="email" title="must be a valid email address" />
                </div>
                <div class="form-groups">
                    <label for="email">Email</label>
                    <input placeholder='name@example.com' pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" id="email" required type="email" title="must be a valid email address" />
                </div>
                
                <div class="form-groups">
                    <label for="password">Password</label>
                    <input placeholder='At least 8 characters' title="Must be at least 8 characters" pattern="[a-zA-Z0-9]{8,}" id="password" required type="password" />
                </div>
                <div class="form-groups">
                    <label for="password">Confirm Password</label>
                    <input placeholder='At least 8 characters' title="Must be at least 8 characters" pattern="[a-zA-Z0-9]{8,}" id="password" required type="password" />
                    <p class="input-hint">Must be at least 8 characters</p>
                </div>
                    <div class="text-right p-t-13 p-b-23">
                        <span class="txt1">Back to </span>
                        <a href="/Login" class="txt2">Login</a>
                    </div>
                <button>Submit</button>
              
                </div>
            </form>
        </>
    )
}

export default Login