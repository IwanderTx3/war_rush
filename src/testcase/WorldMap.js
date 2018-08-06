import React, { Component } from 'react';
//import AddMap from './AddMap';
import {MapLister} from '../component/MapLister'
import { connect } from 'react-redux'
import {fetchMap} from '../store/actionCreators';
import PropTypes from 'prop-types';
// import * as actionCreators from '../store/actionCreators'
//import {bindActionCreators} from 'redux'

var gameid = null

class WorldMap extends Component {


newmapchosen = (selected) => {gameid=selected}

gogetMap = (gameid) =>{this.props.fetchMap(gameid)}

  render() {

    return (
      <div className='btnholder'>
      <div className='menuspacer'></div>
      <div className='bigboxofmaps'>
      <h1>Hello map</h1>
      <MapLister newmapchosen={this.newmapchosen}/>
      <button className='btn' onClick={() => this.gogetMap(gameid)}>Join Map</button>
      
      </div>
      </div>
    );
  }
}

//export default WorldMap;
const mapStateToProps = (state) => ({
   worldmaps : state.worldmaps
})


// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(fetchMap, dispatch);  
//     }


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSaveMap : (world) => dispatch(actionCreators.addMap(world))
//     }
// }
WorldMap.propTypes ={
    fetchMap: PropTypes.func.isRequired,

}

export default connect(mapStateToProps, {fetchMap})(WorldMap)