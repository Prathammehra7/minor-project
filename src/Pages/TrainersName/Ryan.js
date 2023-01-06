import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './trainersname.css'


function Ryan() {

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

        const userId = { id: localStorage.getItem("userid") }
        console.log(userId);
        await axios.post(`http://localhost:4000/api/Trainer/findtrainers/${trainerid}`, userId).then(function (response) {
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
                        <img src="https://img.freepik.com/free-photo/muscular-guy-green-sportswear-isolated-grey_613910-15508.jpg?w=740&t=st=1672767449~exp=1672768049~hmac=4613e681d360c29969363d0ac9777c4578ebffd93fd16a97828231b28f4dde01" alt="" />
                        <h2>Ryan</h2>
                        <p>Ryan is a highly experienced and certified lifestyle personal trainer. He has a degree in kinesiology and has been working in the fitness industry for over 15 years.
                            Ryan's approach to personal training is centered on helping his clients achieve sustainable, long-term results. He believes in a holistic approach to wellness and works with his clients to develop personalized training and nutrition plans that not only improve physical fitness but also support overall health and well-being.
                            In addition to his work as a personal trainer, Ryan is also a certified yoga instructor and a licensed massage therapist. He incorporates elements of these practices into his training sessions to help his clients achieve balance and harmony in their bodies and minds.
                            Ryan is dedicated to helping his clients live their best lives and is committed to ongoing learning and development to ensure that he is providing the most effective and up-to-date training techniques.
                        </p>
                        <h4>Experience : 8Years </h4>
                        <h4>speciality : Yoga Expert </h4>
                        <h4>E-mail : Ryan@gmail.com </h4>

                    </div>
                    <button><a className='btn-book' onClick={handleBooking} >Book</a></button>

                </div>
            </section>

        </>
    )
}

export default Ryan