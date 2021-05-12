import * as actionTypes from '../actions';

const initialState = {
    userId:null
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case actionTypes.SET_USER:
            return {
                userId:action.id
            }
        case actionTypes.AUTH_LOGOUT: {
            return {
                userId:null
            }
        }
        default:
            return state;
    }
}

export default reducer;