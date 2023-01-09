import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './trainersname.css'


function Lisa() {

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
    }, [trainerid]);

    async function handleBooking() {

      
    const userId = { id: localStorage.getItem("userid") }
    console.log(userId);
    await axios.get(`https://lime-troubled-elephant.cyclic.app/api/Trainer/trainers/${trainerid}`, userId).then(function (response) {
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
                        <img src="https://img.freepik.com/free-photo/beautiful-young-female-athlete-practicing-red-studio-wall_155003-37326.jpg?size=626&ext=jpg&ga=GA1.2.1923134287.1653465874" alt="" />
                        <h2>Lisa</h2>
                        <p>Lisa has been practicing yoga for over 10 years and has a deep passion for sharing the benefits of the practice with others. She completed her 200-hour yoga teacher training and has been teaching yoga classes at various studios and gyms in the area.
                            Lisa's classes are suitable for all levels, from beginners to advanced practitioners. She focuses on creating a safe and inclusive environment where students can connect with their breath and find a sense of peace and relaxation. She emphasizes proper alignment and encourages students to listen to their bodies and modify the poses as needed.
                            In addition to teaching yoga, Lisa also offers private sessions and yoga retreats. She is constantly learning and expanding her knowledge, and is always looking for ways to improve her teaching and better serve her students.
                        </p>

                        <div>
                            <h4>Experience : 10Years </h4>
                            <h4>speciality : Yoga Expert </h4>
                            <h4>E-mail : Lisa@gmail.com </h4>
                        </div>
                        <button><a className='btn-book' onClick={handleBooking} >Book</a></button>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Lisa;