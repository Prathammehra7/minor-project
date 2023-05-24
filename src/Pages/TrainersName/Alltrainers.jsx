import { useState, React, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import poster from '../../Image/poster.png'
import Card from '../../Ul/Card'
import { useCart } from "react-use-cart";
import axios from 'axios'
import "./alltrainers.css"
// import { values } from '../../data'


const Alltrainers = () => {

    const [alltraine, setalltraine] = useState({})
    // const[alert,setalert] = useState(false);
    const { trainerid } = useParams();
    const { addItem } = useCart();


    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };
        async function fetchData() {
            try {
                const bookApi = (
                    await axios.get(`https://lime-troubled-elephant.cyclic.app/api/Trainer/findtrainers/${trainerid}`, {})).data;
                setalltraine(bookApi);
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
            <div>
                <section className='details__section'>
                    <div className='container details__container'>
                        <div className='details__section-content'>

                            <img src={alltraine.trainersimg} alt="" />
                            <h2>{alltraine.trainersName}</h2>
                            <h3>{alltraine.trainersabout}</h3>
                            <div className='bottom-info'>
                                <h5>Experience: {alltraine.trainersexp}</h5>
                                <h5>Age: {alltraine.trainersAge}</h5>
                                <h5>Price: {alltraine.trainersPrice}</h5>
                                <h5>Email: {alltraine.trainersemail}</h5>
                            </div>

                            {/* <button><a class="btn-book" onClick={handleBooking} > Book </a></button> */}
                            {/* <button className="btn-book" onClick={() => addItem(alltraine)}>Add to cart</button> */}
                            <button> <a className='btn-book' onClick={() => addItem(alltraine)}>Add to cart</a> </button>
                            {/* {
                                    alltraine.map(((train, id) => {
                                        return <Card key={id} className="values__value">
                                            <img src={train.trainersimg} alt="" />
                                            <h2>{train.trainersName}</h2>
                                            <h3>{train.trainersabout}</h3>
                                            <div className='bottom-info'>
                                                <h5>Experience: {train.trainersexp}</h5>
                                                <h5>Age: {train.trainersAge}</h5>
                                                <h5>Price: {train.trainersPrice}</h5>
                                                <h5>Email: {train.trainersemail}</h5>
                                            </div>
                                            <button className="shophome_cart_msg" onClick={() => 
                                                addItem(alltraine)}>Add to cart</button>
                                        </Card>
                                    }))

                                } */}


                        </div>
                    </div>
                </section>


                <section>
                    <div className="container poster__container">
                        <img src="https://www.slideegg.com/image/catalog/700411-gym%20ppt.png" alt="" />
                    </div>
                </section>

            </div>
        </>
    )
}

export default Alltrainers