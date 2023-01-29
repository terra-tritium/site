import React, { Component } from "react"
import Preloader from '../../components/Preloader'
import Nav from '../../components/Nav'
import Content from '../../components/Content'

import './styles.css'


class Home extends Component {
  render() {
    
    return (
      <>
         <Preloader/>
         <Nav/>
         <Content/>
      </>
    );
  }
}

export default Home