import React from "react";
import Navbar from "./Navbar";
import Homescreen from "./Homescreen";
import Gallery from "./Gallery";     
import Bookmobile from "./Bookmobile";
import Contact from "./Contact";
import Footer from "./Footer";
import ShowBookings from "./ShowBookings";


function App() {
  return (
    <div>

      <Navbar />
      <Homescreen />
      <Gallery />
      <Bookmobile />
      <ShowBookings />
      <Contact />
      <Footer />
      

    </div>
  );
}


export default App;
