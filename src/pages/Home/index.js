import React from "react"
import Preloader from '../../components/Preloader'
import Nav from '../../components/Nav'
import Banner from '../../components/Banner'
import Preview from '../../components/Preview'
import Footer from '../../components/Footer'
import Support from '../../components/Support'
import Roadmap from '../../components/Roadmap'
import Team from '../../components/Team'
import './styles.css'
import Carousel from '../../components/Carousel'


function Home()  {

  
    
    return (
      <>
         <Preloader/>
         <Nav/>         
         <Banner/>         
         <Roadmap/>         
         <Support/>
         <Carousel/>
         <Footer/>

      </>
    );
  }


export default Home