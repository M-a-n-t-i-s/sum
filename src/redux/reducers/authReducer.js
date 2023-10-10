import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    name: localStorage.getItem("name") || 'false'
}

const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, name: action.name}
        default:
            return state

    }
}

export const setAuthUserDataAC = (name) => ({
    type: SET_USER_DATA,
    name
})

export const login = (log,pas)=> {
    return async (dispatch) => {
        let data = await authApi.login(log, pas)
        if (data) {
            dispatch(setAuthUserDataAC(data))
        }

    }
}



export default authReducer
