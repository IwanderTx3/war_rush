import * as actionTypes from './actionTypes'


const initialState = {
  worldmaps : {},
  worldmap:{},
  isAuthenticated : false
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
    case actionTypes.SUCCESS_AUTH:
        return{
            isAuthenticated : action.token != null ? true:false
        }
    case actionTypes.LOGOUT:
        return{
            isAuthenticated : false
        }
        
  
    }

  

}

export default reducer