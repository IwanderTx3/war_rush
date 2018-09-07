import React, {Component} from 'react'
import '../App.css';
import Canvas from './Canvas'

export class DrawnCanvas extends Component {
    componentDidMount(){
console.log("passing through")
    }
    
    render() {return (<div id="container"><div className="app"><Canvas /></div></div>);}}