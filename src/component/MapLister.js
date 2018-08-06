import React, {Component} from 'react'
import {MapListService} from '../services/mapServices'

export class MapLister extends Component 
{

constructor(props){
    super(props)

    this.state ={
        maplist: [],
        gameid: null
     
    }

this.maplistService = new MapListService()
}

update =(e) =>{
    this.setState({gameid:e.target.value});
    this.props.newmapchosen(e.target.value);
};

componentDidMount(){
    this.populateMapList()
}

populateMapList(){
    this.maplistService.getAll((maps) => {
        this.setState({
            maplist : maps
        })
    })
}

render(){
    let maplist = this.state.maplist
      if(maplist.length === 0){
          return (<div> loading .........</div>)
      } else {
          let mapItems =maplist.map((map, index)=>{
              return(
                 <option key={map.id} value={map.id}>{map.id}:{map.mapname} {map.mw}x{map.mh}</option>
              )
          })
          return (
              <div className='boxofmaps'>
              <label> Select Map </label>
              <select id='mapchoice' onChange={this.update}  >{mapItems}</select>
              </div>
          )
      }
    }   
}

