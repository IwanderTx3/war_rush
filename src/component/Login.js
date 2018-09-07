import React, {Component} from 'react'
import axios from 'axios'
import {setAuthenticationToken} from '../utils.js'
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : ' ',
            password : ' '
        }
    }

handleTextBoxChange = (e) => {this.setState({[e.target.name] : e.target.value })}

handleLoginClick = () => {
    axios.post('http://localhost:3100/playerlogin', {
        username :this.state.username,
        password :this.state.password
    }).then(response => {
        const token =response.data.token
        localStorage.setItem('jsonwebtoken',token)
        this.props.handleSuccessAuthentication(token)
        console.log(token)
        setAuthenticationToken(token)
        console.log(token)
        //replace({pathname: '/join-map'})
        //context.history.push('/join-map')
        this.props.history.push("/join-map");
})}

render (){
    return (
        <div className='backdrop'>
        <div className='btnholder'>
        <div className='menuspacer'></div>
        <div className='loginFrame'>
        <h1>Login</h1>
            <input type="text" onChange = { this.handleTextBoxChange } name = "username" placeholder ="User Name" />
            <input type="text" onChange = { this.handleTextBoxChange } name = "password" placeholder ="password" />
            <button onClick = { this.handleLoginClick}>Login</button>
        </div>
        </div>
        </div>

)}}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSuccessAuthentication : (token) => dispatch ({ type : "SUCCESS_AUTH", token : token})
    }
}

export default connect(null,mapDispatchToProps)(Login)

