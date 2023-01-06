import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"
import axios from "axios";

export default function Login() {

	const [Email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	async function handleLogin() {
	
		const user = {
			Email,
			password,
		};
		await axios.post("http://localhost:4000/api/Login", user).then(function (response) {
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
			<div className='container form-container'>
				<div className="form-items">
					<div class="form-group">
						<label for="email">Email</label>
						<input placeholder='name@example.com' pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}' id="email" required type="email" title="must be a valid email address" onChange={(e) => {
							setEmail(e.target.value)
						}} />
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input placeholder='At least 8 characters' title="Must be at least 8 characters" pattern='(?=.*\d)(?=.*[a-z]).{8,}' id="password" required type="password" onChange={(e) => {
							setpassword(e.target.value)
						}} />
						<p class="input-hint">Must be at least 8 characters</p>
					</div>
					<div class="text-right p-t-13 p-b-23">
						<span class="txt1">Forgot </span>
						<a href="/Forgot" class="txt2">Username / Password?</a>
					</div>
					<button onClick={() => {
						handleLogin()
					}} >Submit</button>
					<div class="flex-col-c p-t-170 p-b-40">
						<span class="txt1 p-b-9">Don’t have an account?</span>
						<a href="/Signup" class="txt3">Sign up now</a>
					</div>
				</div>
			</div>
			<ToastContainer />

		</>
	);
}
