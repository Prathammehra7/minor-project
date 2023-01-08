import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './trainersname.css'


function Chris() {

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
                    await axios.get(`http://localhost:4000/api/Trainer/findtrainers/${trainerid}`, {})).data;
                settraine(bookApi);
                console.log(bookApi);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    async function handleBooking() {

        window.location.href = "/Payment"
       
    }

    return (
        <>

            <section className="details__section" >
                <div className="container details__container">
                    <div className="details__section-content">
                        <img src="https://img.freepik.com/free-photo/strong-man-his-muscles_144627-8397.jpg?w=360&t=st=1672767525~exp=1672768125~hmac=2eb88bd2fc92fdbf5d36f42ad641537244d97b9428d35abf1a2e6bfa85b3b0c8" alt="" />
                        <h2>{traine.trainersName}</h2>
                        <p>Chris is a highly skilled performance personal trainer with a strong background in sports science. He holds multiple certifications, including a degree in exercise physiology and a certification as a strength and conditioning coach.
                            Chris has worked with a wide range of clients, including professional athletes, amateur athletes, and individuals looking to improve their physical performance in their daily lives. He is skilled in a variety of training techniques, including strength training, plyometrics, and speed and agility work.
                            In addition to his work as a personal trainer, Chris is also an avid athlete and competes in various sports. He brings his extensive knowledge of training and sport performance to his work with his clients and is committed to ongoing learning and development to stay up-to-date on the latest research and techniques.
                        </p>
                        <h4>Experience : 11Years </h4>
                        <h4>speciality : Yoga Expert </h4>
                        <h4>E-mail : Chris@gmail.com </h4>
                    </div>
                    <button><a className='btn-book' onClick={handleBooking} >Book</a></button>

                </div>
            </section>

        </>
    )
}

export default Chris