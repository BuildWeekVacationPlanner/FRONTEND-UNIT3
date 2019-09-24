import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";


// /*** sign in new user ***/
// export const ADD_USER_START = "ADD_USER_START";
// export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
// export const ADD_USER_FAILURE = "ADD_USER_FAILURE";



// /*** log in user ***/
// export const LOGIN_USER_START = "LOGIN_USER_START";
// export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
// export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";


/***add new trip ***/
export const ADD_TRIP_START = "ADD_TRIP_START";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";
export const ADD_TRIP_FAILURE = "ADD_TRIP_FAILURE";

/***retrieve trips***/

export const GET_TRIPS_START = "GET_TRIPS_START";
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
export const GET_TRIPS_FAILURE = "GET_TRIPS_FAILURE";

export const getTrips = () => dispatch => {
    dispatch({ type: GET_TRIPS_START })
    axiosWithAuth().get("/vacations/")
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
}