import React from 'react'
import Mainpage from '../../Components/Mainpage'
import Programs from '../../Components/Programs'
import Slider from '../../Components/Slider'
import Trainers from '../../Components/Trainers'
import "./Home.css"



function Home() {
  return (
   <>
   <Mainpage/>
   <Programs/>
   <Slider/>
   <Trainers/>
   </>
  )
}

export default Home