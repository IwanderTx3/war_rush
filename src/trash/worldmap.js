

const initialState = [
{
    id:null,
    mapname : '',
    mapfile : {},
    createdAt : null,
    updatedAt : null,
    mh : null,
    mw: null,
}
];

export default function Worldmap(state=initialState, action) {
    switch(action.type) {
        case MapActionTypes.ADD_MAP:
        return [
            ...state,
            {
                id : action.id,
                mapname : action.name,
                mapfile : action.mapfile,
                createdAt : action.createdAt,
                updatedAt : action.updatedAt,
                mh : action.mh,
                mw: action.mw,
            }
        ];

        
        
        default:
            return state;
    }

}