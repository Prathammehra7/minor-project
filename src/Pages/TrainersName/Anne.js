import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './trainersname.css'

function Anne() {

    const [traine, settraine] = useState({})
    // const[alert,setalert] = useState(false);
    const { trainerid } = useParams();

    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };
        async function fetchData() {
            try {
                const bookApi = (
                    await axios.get(`https://lime-troubled-elephant.cyclic.app/api/Trainer/findtrainers/${trainerid}`, {})).data;
                settraine(bookApi);
                console.log(bookApi);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    async function handleBooking() {

        const userId = { id: localStorage.getItem("userid") }
        console.log(userId);
        await axios.post(`https://lime-troubled-elephant.cyclic.app/api/Trainer/findtrainers/${trainerid}`, userId).then(function (response) {
            {

                window.location.href = "/Payment"
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <>

            <section className="details__section" >
                <div className="container details__container">

                    <div className="details__section-content">
                        <img src="https://img.freepik.com/free-photo/cheerful-young-sports-woman-with-arms-crossed_171337-8914.jpg?w=740&t=st=1672759445~exp=1672760045~hmac=77b71a2c75dfbf8f52bd8ccf96fff8a6e23466eea34490ea18573ef262e2147f" alt="" />
                        <h2>Anne</h2>
                        <p>Anne is a highly skilled physique trainer with years of experience in the fitness industry. She holds multiple certifications, including a degree in exercise science and personal training certification.
                            Anne is passionate about helping her clients reach their health and fitness goals, and she is known for her ability to create customized training programs that are tailored to each individual's needs. She is skilled in a wide range of training techniques, including strength training, cardiovascular exercise, and flexibility work.
                            In addition to her work as a personal trainer, Anne is also an avid athlete and competes in physique competitions. She has a wealth of knowledge about training for specific goals, such as improving muscle tone and definition.
                            Anne is dedicated to continuing her education and staying up-to-date on the latest training techniques and research. She is committed to helping her clients achieve their best selves and reach their full potential.
                        </p>
                        <h4>Experience : 7Years </h4>
                        <h4>speciality : physique trainer</h4>
                        <h4>E-mail : Anne@gmail.com </h4>

                    </div>
                    <button><a className='btn-book' onClick={handleBooking} >Book</a></button>

                </div>
            </section>

        </>
    )
}

export default Anne