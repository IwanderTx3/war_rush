import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as WorldActionCreators from '../actions/worldmap';
import '../App.css'


class Worldmap extends Component {

  static propTypes = {
    worldmaps: PropTypes.array.isRequired
  };

  render() {
    const {dispatch, worldmaps} = this.props;
    const addMap = bindActionCreators(WorldActionCreators.addMap, dispatch);
    const removeMap = bindActionCreators(WorldActionCreators.removeMap, dispatch);
    const updateMap = bindActionCreators(WorldActionCreators.updateMap, dispatch);

    const mapComponents = worldmaps.map((worldmap, index) => (
      < Worldmap
      index = {index}
      key = {worldmap.id}
      id = {worldmap.id }
      mapname = {worldmap.mapname } 
      mapfile = {worldmap.mapfile }
      createdAt = {worldmap.createdAt }
      updatedAt = {worldmap.updatedAt }
      mh = {worldmap.mh }
      mw= {worldmap.mw }
      updateMap = {updateMap}
      removeMap = {removeMap}
      />

    ))

    return (
      <div>
         {mapComponents}
      </div>
    )
  }

}const mapStateToProps = state => ({
  worldmaps: state
});



export default connect(mapStateToProps)(Worldmap);