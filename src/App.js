
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
// import Gallery from "./Pages/Gallery/Gallery";
import Plans from "./Pages/plans/Plans";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
// import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer";
import Trial from "./Pages/Trial/Trial";

function App() {
  return (

    <BrowserRouter>

      <Navbar />
    

      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        {/* <Route path='gallery' element={<Gallery />} />
      <Route path='*' element={<NotFound />} /> */}
      <Route path='Contact' element={<Contact />} />
      <Route path='Login' element={<Login />} />
      <Route path='Signup' element={<Signup/>} />
      <Route path='plans' element={<Plans />} />
      <Route path='Trial' element={<Trial/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>


  );
}

export default App;
