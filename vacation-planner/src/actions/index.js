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


/***retrieve trips***/

export const GET_TRIPS_START = "GET_TRIPS_START";
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
export const GET_TRIPS_FAILURE = "GET_TRIPS_FAILURE";

export const getTrips = () => dispatch => {
    dispatch({ type: GET_TRIPS_START })
    axiosWithAuth().get("/vacations/")
        .then(res => {
            dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data});
            console.log(res.data)
        })
        .catch(err => {
            dispatch({type: GET_TRIPS_FAILURE, paylaod: `${err}`})
        })
    }



/***add new trip ***/
export const ADD_TRIP_START = "ADD_TRIP_START";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";
export const ADD_TRIP_FAILURE = "ADD_TRIP_FAILURE";



export const addNewTrip = creds => dispatch => {
    dispatch({ type: ADD_TRIP_START});
    axiosWithAuth().post("/vacations/add", creds)
        .then(res => {
            console.log("res from post", res);
            dispatch({ type: ADD_TRIP_SUCCESS, payload: creds})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_TRIP_FAILURE, payload: `${err}`})
        });

}

