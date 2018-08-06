import * as actionTypes from './actionTypes'


const initialState = {
  worldmaps : {},
  worldmap:{},
  monsters:[]
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case actionTypes.ADD_MAP:
        return {
            ...state,
            worldmaps : state.worldmaps.concat(action.worldmap)
      };
    case actionTypes.REMOVE_MAP:
        return {
            ...state.slice(0,action.index),
            ...state.slice(action.index +1)
        };
    case actionTypes.FETCH_MAP:
    return{
        ...state,
        worldmaps: action.worldmap
    }
    default:
        return state;
  }
}

export default reducer