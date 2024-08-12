import React from "react";
import Header from "../components/Header";
import About from "./About";
import Experience from "../components/Experience";
import TextGenerate from "../components/TextGenerate";
import Footer from '../components/Footer';
import GridBackground from "../components/ui/GridBackground";

const Home = () => {
  return (
    <>
      <GridBackground>
        <Header />
      </GridBackground>
      <div className="bg-black p-5">
        <TextGenerate />
        <Footer/>
      </div>
      {/* <Experience/> */}
    </>
  );
};

export default Home;
