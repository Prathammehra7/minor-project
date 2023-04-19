import { useState, React, useEffect } from 'react'
import SectionHead from '../../Components/SectionHead'
import { CgGym } from 'react-icons/cg'
import poster from '../../Image/poster.png'
import Card from '../../Ul/Card'
import axios from 'axios'
import "./trainer.css"
// import { values } from '../../data'


const Trainer = () => {

    const [trainer, settrainer] = useState([])
    useEffect(() => {

        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };


        async function fetchData() {
            try {

                const bookApi = (
                    await axios.get("https://lime-troubled-elephant.cyclic.app/api/Trainer/getTrainers", {})
                ).data;

                settrainer(bookApi);
                console.log(bookApi);

            } catch (error) {

                console.log(error);
            }
        }

        fetchData();
    }, []);


    return (
        <>

            <section>
                <div className="poster__containers">
                    <img src={poster} alt="" />
                </div>
            </section>



            <section className='values'>
                <div className='container values__container'>
                    <div className='values__left'>
                        <div className='values__image'>
                            <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                    </div>
                    <div className='values__right'>
                        <SectionHead icon={<CgGym />} title="Trainers" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nisi nobis enim unde pariatur nulla.</p>

                        <div className="values__wrapper">
                            {
                                trainer.map(((train, id) => {
                                    return <Card key={id} className="values__value">
                                        <img src={train.trainersimg} alt="" />
                                        <h2>{train.trainersName}</h2>
                                        <h4>Height: {train.trainersHeight}</h4>
                                        <h4>Age: {train.trainersAge}</h4>
                                        <h4>Time: {train.trainersTime}</h4>
                                        <button><a class="btn lg" onClick={() => {
                                            window.location.href = "/TrainersName/" + train._id;
                                        }} >View</a></button>
                                    </Card>
                                }))

                            }
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className="container poster__container">
                    <img src="https://www.slideegg.com/image/catalog/700411-gym%20ppt.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Trainer