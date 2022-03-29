import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <div id="Home">
      <Header />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default Home;
