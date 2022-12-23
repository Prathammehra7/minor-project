import React from 'react'
import { Link } from 'react-router-dom'


const Mainpage = () => {
  return (

    <header className='main__page'>
      <div className='container main__page-container'>
        <div className="main__page-left">
          <h4>Healthy | Fit Workout</h4>
          <h1>join the Legends of the fitness world </h1>
          <h2>with Pratham Mehra</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus distinctio culpa aut?</p>
          <Link to="/plans" className='btn lg'> Get started</Link>
        </div>
        {/* <div className="main__page-right">
          <div className="main__page-circle"></div>
          <div className="main__page-image">
          <img src={Image} alt="Main page Image" />
          </div>
          
        </div> */}
        </div>
    </header>
  )
}

export default Mainpage