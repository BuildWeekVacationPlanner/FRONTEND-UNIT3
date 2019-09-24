import { axiosWithAuth } from "../utils/axiosWithAuth";


/***retrieve trips***/

export const GET_TRIPS_START = "GET_TRIPS_START";
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
export const GET_TRIPS_FAILURE = "GET_TRIPS_FAILURE";

export const getTrips = () => dispatch => {
    dispatch({ type: GET_TRIPS_START })
    axiosWithAuth().get("/vacations/")
        .then(res => {
            dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data});
            console.log(res.data);
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

/******get trip by id**********/

export const FIND_TRIP_BY_ID_START ="FIND_TRIP_BY_ID_START";
export const FIND_TRIP_BY_ID_SUCCESS = "FIND_TRIP_BY_ID_SUCCESS";
export const FIND_TRIP_BY_ID_FAILURE = "FIND_TRIP_BY_ID_FAILURE";

export const findTrip = (id) => dispatch => {
    dispatch({ type: FIND_TRIP_BY_ID_START })
    axiosWithAuth().get(`/vacations/${id}`)
        .then(res => {
            dispatch({ type: FIND_TRIP_BY_ID_SUCCESS, payload: res.data});
            console.log("trip found", res.data);
        })
        .catch(err => {
            dispatch({type: FIND_TRIP_BY_ID_FAILURE, paylaod: `${err}`})
            console.log(err);
        })
    }

