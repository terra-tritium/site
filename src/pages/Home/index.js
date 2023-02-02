import React from "react"
import Preloader from '../../components/Preloader'
import Nav from '../../components/Nav'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import Support from '../../components/Support'
import Roadmap from '../../components/Roadmap'
import './styles.css'


function Home()  {

  
    
    return (
      <>
         <Preloader/>
         <Nav/>
         <Content/>
         <Roadmap/>
         <Support/>
         <Footer/>

      </>
    );
  }


export default Home