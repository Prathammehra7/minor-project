import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Signup.css'



const Signup = () => {

    const [name, setuserName] = useState();
    const [email, setuserEmail] = useState();
    const [password, setpassword] = useState();
    const [confirmPassword, setconfirmpassword] = useState();

    const handleSignup = async () => {
        try {
            
            const user = { name, email, password, confirmPassword };

            const data = await axios.post("http://localhost:4000/api/Signup", user)

            if (data) {
                console.log(`user siginup successfully`);
                window.location.href = "/Login"
            }

        } catch (error) {
            console.log(`something went wrong!`);
            
        }
    }

    return (
        <>

            <section>
                <div className=" form-containers">
                    <div className="mainns">
                        <div className="sign-box">
                            <div>
                                <h2>Sign up</h2>
                                <div className="input-boxs">
                                    {/* <span className="icons"><GrMail /></span> */}
                                    <input title='XYZ' id="text" name='name' required type="text" onChange={(e) => {
                                        setuserName(e.target.value)
                                    }} />
                                    <label>Name</label>
                                </div>
                                <div className="input-boxs">
                                    {/* <span className="icons"><AiFillLock /></span> */}
                                    <input title='name@example.com' pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" id="email" required type="email" name='email' onChange={(e) => {
                                        setuserEmail(e.target.value)
                                    }} />
                                    <label>Email</label>
                                </div>
                                <div className="input-boxs">
                                    {/* <span className="icons"><AiFillLock /></span> */}
                                    <input title="Must be at least 8 characters" pattern="[A-Za-z0-9][A-Za-z0-9 -_].{6,}" id="password" required type="password" onChange={(e) => {
                                        setpassword(e.target.value)
                                    }} />
                                    <label> password</label>
                                </div>
                                <div className="input-boxs">
                                    {/* <span className="icons"><AiFillLock /></span> */}
                                    <input title="Must be at least 8 characters" pattern="[A-Za-z0-9][A-Za-z0-9 -_].{6,}" id="password" required type="password" onChange={(e) => {
                                        setconfirmpassword(e.target.value)
                                    }} />
                                    <label>Confirm password</label>
                                </div>
                                <div className="remembers">
                                    <label htmlFor=""> <input type="checkbox" /> Remember me</label>
                                    <a href="/Login">Go Back To Login</a>
                                </div>
                                <button className='signbutton' type='submit' onClick={() => {
                                    handleSignup()
                                }} >Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup