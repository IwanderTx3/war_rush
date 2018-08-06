import React, { Component } from 'react';
import {Menu} from './component/Menu'
import './App.css';
import { Footer } from './component/Footer';
export class App extends Component {
  render() {
    return (
<div >
      <Menu />
      
      {this.props.children}
  
      <Footer/>
      </div>
    );
  }
}

export default App;
