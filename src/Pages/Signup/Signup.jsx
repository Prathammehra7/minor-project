import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Signup.css'



const Signup = () => {

    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [password, setpassword] = useState();
    const [confirmPassword, setconfirmpassword] = useState();

    const handleSignup = async () => {
        const user = { Name, Email, password, confirmPassword };

        await axios.post("http://localhost:4000/api/Signup", user).then(function (response) {

            if (response.data) {
                console.log(`user siginup successfully`);
                window.location.href = "/Login"
            }

        }).catch(function (error) {
            {
                console.log(`something went wrong!`);
            }
        });
    }

    return (
        <>
            <div className='container form-containers'>
                <div className="form-itemss">
                    <div class="form-groups">
                        <label for="name">Name</label>
                        <input placeholder='XYZ' id="text" required type="text" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </div>
                    <div class="form-groups">
                        <label for="email">Email</label>
                        <input placeholder='name@example.com' pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" id="email" required type="email" title="must be a valid email address" onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>

                    <div class="form-groups">
                        <label for="password">Password</label>
                        <input placeholder='At least 8 characters' title="Must be at least 8 characters" pattern="(?=.*\d)(?=.*[a-z]).{8,}" id="password" required type="password" onChange={(e) => {
                            setpassword(e.target.value)
                        }} />
                    </div>
                    <div class="form-groups">
                        <label for="password">Confirm Password</label>
                        <input placeholder='At least 8 characters' title="Must be at least 8 characters" pattern="(?=.*\d)(?=.*[a-z]).{8,}" id="password" required type="password" onChange={(e) => {
                            setconfirmpassword(e.target.value)
                        }} />
                        <p class="input-hint">Must be at least 8 characters</p>
                    </div>
                    <div class="text-right p-t-13 p-b-23">
                        <span class="txt1">Back to </span>
                        <a href="/Login" class="txt2">Login</a>
                    </div>
                    <button onClick={() => {
                        handleSignup()
                    }}>Submit</button>

                </div>
            </div>
        </>
    )
}

export default Signup