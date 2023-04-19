import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"
import axios from "axios";

export default function Login() {



	const [Email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	async function handleLogin() {

		const user = {
			Email,
			password,
		};
		await axios.post("https://lime-troubled-elephant.cyclic.app/api/Login", user).then(function (response) {
			if (response.data.token) {
				toast.success("SignUp Successfully");
				localStorage.setItem("token", response.data.token);
				window.location.href = "/Trainer";
			}
		}).catch(function (error) {
			toast.warning("Something wrong");
			console.log(error);
		})



	}

	return (
		<>
			<section className='section'>
				<div className=" form-container">
					<div className="mainn">
						<div className="login-box">
							<div>
								<h2>Login</h2>
								<div className="input-box">
									{/* <span className="icons"><GrMail /></span> */}
									<input pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}' id="email" required type="email" title="must be a valid email address" onChange={(e) => {
										setEmail(e.target.value)
									}} />
									<label> Email</label>
								</div>
								<div className="input-box">
									{/* <span className="icons"><AiFillLock /></span> */}
									<input title="Must be at least 8 characters" pattern='[A-Za-z0-9][A-Za-z0-9 -_].{6,}' id="password" required type="password" onChange={(e) => {
										setpassword(e.target.value)
									}} />
									<label> password</label>
								</div>
								<div className="remember">
									<label htmlFor=""> <input type="checkbox" /> Remember me</label>
									<a href="#">Forgot Password</a>
								</div>
								<button className='loginbutton' type='submit' required onClick={() => {
									handleLogin()
								}} >Submit</button>
								<div className="signup">
									<p>Don't have an account?
										<a href="/signup"> Register </a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ToastContainer />

		</>
	);
}
