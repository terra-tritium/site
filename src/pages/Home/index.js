import React from "react"
import Preloader from '../../components/Preloader'
import Nav from '../../components/Nav'
import NavMob from '../../components/NavMob'
import Banner from '../../components/Banner'
import Preview from '../../components/Preview'
import Footer from '../../components/Footer'
import Support from '../../components/Support'
import Roadmap from '../../components/Roadmap'
import Team from '../../components/Team'
import './styles.css'


function Home()  {

  
    
    return (
      <>
         <Preloader/>
         <Nav/>
         <NavMob/>
         <Banner/>
         <Preview/>
         <Roadmap/>         
         <Support/>
         <Footer/>

      </>
    );
  }


export default Home