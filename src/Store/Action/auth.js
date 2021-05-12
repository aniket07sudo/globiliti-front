import * as actionTypes from '../actions';

export const Setid = (id) => {
    return {
        type: actionTypes.SET_USER,
        id
    }
}

export const authLogout = () => {
    localStorage.removeItem('guser');

    return {
        type:actionTypes.AUTH_LOGOUT
    }
}

export const AutoSign = () => {
    return dispatch => {
        const userId = localStorage.getItem('guser');
        if (userId) {
            dispatch(Setid(userId));
        }
    }
}