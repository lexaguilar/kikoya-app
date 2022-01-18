import { GET_USER, UPDATE_USER } from "./userActionTypes";

const user = {
    username: '',
    role: ''
};



export default function userReducer(state = user, { type, payload }) {

    switch (type) {

        case GET_USER:

            let _user =JSON.parse(localStorage.getItem('user'));

            return {...state, ..._user};

        case UPDATE_USER:

            let newState = {...state, ...payload };            

            return newState;

        default:

            let current =JSON.parse(localStorage.getItem('user'));

            return {...state, ...current};

    }

}