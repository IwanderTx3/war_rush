import React, {Component} from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom'



export class Menu extends Component {

  render() {
    return (
      <div id="menu">
        <div><NavLink exact to = "/">Home</NavLink></div>
        <div><NavLink to = "/join-map">Select Map</NavLink></div>
        <div><NavLink exact to = "/map">View Map</NavLink></div>
        <div><NavLink to = "/worldmap">World Map</NavLink></div>
      </div>
    )
  }

}
