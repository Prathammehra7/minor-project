import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Plans from "./Pages/plans/Plans";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Choose from "./Pages/Choose/Choose";
// import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer";
import Trial from "./Pages/Trial/Trial";
import Trainer from "./Pages/Trainers/Trainer";
import TrainerDetails from "./Pages/TrainersDetails/Details";
import Programone from "./Pages/Programs/Programone";
import Programtwo from "./Pages/Programs/Programtwo";
import Programthree from "./Pages/Programs/Programthree";
import Programfour from "./Pages/Programs/Programfour";
import AllTrainers from "./Pages/TrainersName/Alltrainers";
// import Chris from "./Pages/TrainersName/Chris";
// import Anne from "./Pages/TrainersName/Anne";
// import Ryan from "./Pages/TrainersName/Ryan";
import Payment from "./Pages/Payment/Payment";
import Profile from "./Pages/Profile/profile";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='*' element={<NotFound />} /> */}
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Programone' element={<Programone />} />
        <Route path='/Programtwo' element={<Programtwo />} />
        <Route path='/Programthree' element={<Programthree />} />
        <Route path='/Programfour' element={<Programfour />} />
        <Route path='/TrainersDetails' element={<TrainerDetails />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Trainer' element={<Trainer />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/TrainersName/:trainerid' element={<AllTrainers />} />
        {/* <Route path='/TrainersName/:trainerid' element={<Chris />} />
        <Route path='/TrainersName/:trainerid' element={<Ryan />} />
        <Route path='/TrainersName/:trainerid' element={<Anne />} /> */}
        <Route path='/Signup' element={<Signup />} />
        <Route exact path='/plans' element={<Plans />} />
        <Route path='/Trial' element={<Trial />} />
        <Route path='/Choose' element={<Choose />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
