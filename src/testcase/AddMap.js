import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class AddMap extends Component{
    constructor(props) {
        super(props)
        this.state = {
            worldmap :{}
        }
    }

    handleTextChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            worldmap : {
                ...this.state.worldmap,
                [e.target.name] : e.target.value
            }
        })
    }

render() {
    return(
        <div>
            <h1>Add Map</h1>
            <button onClick={() => this.props.onSaveMap(this.state.worldmap)}>Save</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        worldmaps : state.worldmaps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveMap : (worldmap) => dispatch(actionCreators.addMap(worldmap))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMap)