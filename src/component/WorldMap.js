import React, { Component } from 'react';
import {MapLister} from '../component/MapLister'
import { connect } from 'react-redux'
import {fetchMap} from '../store/actionCreators';
import PropTypes from 'prop-types';


var gameid = null

class WorldMap extends Component {


newmapchosen = (selected) => {gameid=selected}



gogetMap = (gameid) =>{this.props.fetchMap(gameid,this.goseeit)}

goseeit = () =>{this.props.history.push("/worldmap")}

// dotwoThings = (gameid) => {
//   this.gogetMap(gameid);
//   console.log("Going to see the world")
//   this.goseeit();
// }

  render() {

    return (
      <div className='backdrop'>
      <div className='btnholder'>
      <div className='menuspacer'></div>
      <div className='bigboxofmaps'>
      <h1>Select the game you wish to join</h1>
      <MapLister newmapchosen={this.newmapchosen}/>
      <button className='btn' onClick={() => this.gogetMap(gameid)}>Join Map</button>
      </div>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
   worldmaps : state.worldmaps
})

WorldMap.propTypes ={
    fetchMap: PropTypes.func.isRequired,

}

export default connect(mapStateToProps, {fetchMap})(WorldMap)