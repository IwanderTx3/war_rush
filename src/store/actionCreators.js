import * as actionTypes from './actionTypes'

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

export const fetchMap = (gameid) => dispatch => {
    fetch('http://localhost:3100/map/'+gameid) 
    .then((response) => response.json())
    .then((worldmap) => dispatch({
        type : actionTypes.FETCH_MAP,
        worldmap : worldmap
}))};

