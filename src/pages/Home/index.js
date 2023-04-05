import React from "react"
import Preloader from '../../components/Preloader'
import Nav from '../../components/Nav'
import NavBarMobile from '../../components/NavBarMobile'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Support from '../../components/Support'
import Roadmap from '../../components/Roadmap'
import Carousel from '../../components/Carousel'
import './styles.css'


function Home()  {
  return (
    <>
      <Preloader/>
      <Nav/>   
      <NavBarMobile/>      
      <Banner/>         
      <Roadmap/>         
      <Support/>
      <Carousel/>
      <Footer/>
    </>
  );
}


export default Home