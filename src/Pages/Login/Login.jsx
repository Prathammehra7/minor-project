import React from 'react'
import './Login.css'



const Login = () => {
    return (
        <>
            <form className='container form-container'>
                <div className="form-items">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input placeholder='name@example.com' pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" id="email" required type="email" title="must be a valid email address" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input placeholder='At least 8 characters' title="Must be at least 8 characters" pattern="[a-zA-Z0-9]{8,}" id="password" required type="password" />
                    <p class="input-hint">Must be at least 8 characters</p>
                </div>
                    <div class="text-right p-t-13 p-b-23">
                        <span class="txt1">Forgot </span>
                        <a href="/Forgot" class="txt2">Username / Password?</a>
                    </div>
                <button>Submit</button>
                <div class="flex-col-c p-t-170 p-b-40">
                    <span class="txt1 p-b-9">Don’t have an account?</span>
                    <a href="/Signup" class="txt3">Sign up now</a>
                </div>
                </div>
            </form>
        </>
    )
}

export default Login