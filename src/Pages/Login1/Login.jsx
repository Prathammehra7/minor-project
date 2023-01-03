// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import './Login.css'



// const Login = () => {

//     const [Email,setEmail] = useState();
//     const [password,setpassword] = useState();

//     const handleLogin = async () => { 
//         const user = {Email,password};

//         await axios.post("http://localhost:4000/api/Login",user).then(function (response) {
        
    
//           if (response.data) {
//             console.log(`User login successfully`);
//             window.location.href = "http://localhost:3000/Contact";
//             localStorage.setItem("token",response.data.token);
//             localStorage.setItem("userID",response.data.userID);
//           }
    
//         }).catch(function (error) {
//             console.log(`invalid credentials`);
//         })
//      } 


//     return (
//         <>
//             <form className='container form-container'>
//                 <div className="form-items">
//                 <div class="form-group">
//                     <label for="email">Email</label>
//                     <input placeholder='name@example.com'  id="email" required type="email" title="must be a valid email address" onChange={(e) => {
//                         setEmail(e.target.value)
//                     } }  />
//                 </div>
//                 <div class="form-group">
//                     <label for="password">Password</label>
//                     <input placeholder='At least 8 characters' title="Must be at least 8 characters" id="password" required type="password" onChange={(e) => {
//                         setpassword(e.target.value)
//                     } }  />
//                     <p class="input-hint">Must be at least 8 characters</p>
//                 </div>
//                     <div class="text-right p-t-13 p-b-23">
//                         <span class="txt1">Forgot </span>
//                         <a href="/Forgot" class="txt2">Username / Password?</a>
//                     </div>
//                 <button onClick={() =>{
//                     handleLogin()
//                 }} >Submit</button>
//                 <div class="flex-col-c p-t-170 p-b-40">
//                     <span class="txt1 p-b-9">Don’t have an account?</span>
//                     <a href="/Signup" class="txt3">Sign up now</a>
//                 </div>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default Login