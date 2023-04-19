import React, { useState } from 'react';
import "./Trial.css"
export default function Trial() {

    const [text, setText] = useState("");
    const [textarea, setTextarea] = useState("");
    const handleChange = () => {
        if (text && textarea) {
            window.location.href = "/login";

        }

    }

    return (
        <>
            <div className="formContainer1">
                <div className="formContainer2">
                    <h1>Membership</h1>
                    <div className="form">
                        <label htmlFor="Name"> Name</label>
                        <input type="Text" name="Text" id="text" required onChange={(e) => {
                            setText(e.target.value);
                        }} />
                        <label htmlFor="Contact">Contact</label>
                        <input type="number" name="number" id="number" required onChange={(e) => {
                            setText(e.target.value)
                        }} />
                        <label htmlFor="Country">Country</label>
                        <select id="country" name="country">
                            <option value="select">Select</option>
                            <option value="india">India</option>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label class="comment" htmlFor="Textarea">Comment</label>
                        <textarea type="Textarea" placeholder="Write something.. " name="textarea" id="textarea" required onChange={(e) => {
                            setTextarea(e.target.value)
                        }} />
                        <button onClick={handleChange} required >Submit</button>

                    </div>
                </div>
            </div>
        </>
    );
}