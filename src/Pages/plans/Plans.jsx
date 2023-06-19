import { useState, React, useEffect } from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../Image/header_bg_4.jpg'
import Card from '../../Ul/Card'
import  {plans} from '../../data'
import './plans.css'




const Plans = () => {
  const [alltraine, setalltraine] = useState({})
  // const[alert,setalert] = useState(false);
  async function handleBooking() {




    const userId = { id: localStorage.getItem("userid") }
    console.log(userId);

    window.location.href = "/Login"

  }

  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda illum officiis, sequi totam eveniet id numquam odio soluta voluptates veritatis?
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({ id, name, desc, price, features }) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <h5>{desc}</h5>
                <h1>{`${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({ feature, available }, index) => {
                    return <p key={index} className={!available ? 'disable' : ''}>
                      {feature}
                    </p>

                  })
                }
                <button >
                  <a className='btn lg' onClick={handleBooking} >Choose Plan</a>
                </button>

              </Card>
            })
          }



        </div>
      </section>

    </>
  )
}

export default Plans