import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addMap = (worldmap) => {
  return {
    type : actionTypes.ADD_MAP,
    worldmap : worldmap
  };
};

export const removeMap = index =>{
    return {
        type: actionTypes.REMOVE_MAP,
        index
    };
};
export const fetchMap = (gameid,goseeit) => dispatch => {
    axios.get('http://localhost:3100/map/'+gameid)
    .then((worldmap) => {
        dispatch({
        type : actionTypes.FETCH_MAP,
        worldmap : worldmap.data
})
return goseeit;
})
.then ( (goseeit) => {
    goseeit()
})};

