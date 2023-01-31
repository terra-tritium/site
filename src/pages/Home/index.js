import React, { Component } from "react"
import Preloader from '../../components/Preloader'
import Nav from '../../components/Nav'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

import './styles.css'


class Home extends Component {
  render() {
    
    return (
      <>
         <Preloader/>
         <Nav/>
         <Content/>
         <Footer/>
      </>
    );
  }
}

export default Home