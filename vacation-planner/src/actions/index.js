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
/***add another user to trip*******/
export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";


export const addUserToTrip = (name, id) => dispatch => {
    console.log("creds", {users: name});
    console.log("id", id);
    dispatch({ type: ADD_USER_START});
    axiosWithAuth().post(`/vacations/${id}/addUser`, name)
        .then(res => {
            if(res.status === 201) {
                dispatch({ type: ADD_USER_SUCCESS, payload: name.username})
            }  
        })
        .catch(err => {
            if(err){
                dispatch({type: ADD_USER_FAILURE, payload: 'This username does not exist' })
            }
        });
}

/*************delete a user from the trip******/
export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUserFromTrip = (name, id) => dispatch => {
    dispatch({type: DELETE_USER_START})
    axiosWithAuth().delete(`/vacations/${id}/deleteuser`, {data: name})
        .then(res => {
            console.log("deleted", res);
            dispatch({type: DELETE_USER_SUCCESS, payload: res.data})
            findTrip(id);
        })
        .catch(err => {
            dispatch({type: DELETE_USER_FAILURE, payload: `${err}`})
            console.log(err);});

}
/********add a place**********/

export const ADD_PLACE_START = "ADD_PLACE_START";
export const ADD_PLACE_SUCCESS = "ADD_PLACE_SUCCESS";
export const ADD_PLACE_FAILURE = "ADD_PLACE_FAILURE";



export const addPlace = (id, creds) => dispatch => {
    // dispatch({ type: ADD_PLACE_START});
    axiosWithAuth().post(`/vacations/${id}/suggestions`, {suggestion: creds})
        .then(res => {
            console.log("New place added!", res);
            //dispatch({ type: ADD_PLACE_SUCCESS, payload: creds})
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: ADD_PLACE_FAILURE, payload: `${err}`})
        });

}

/*************get places************/
export const GET_PLACE_START = "GET_PLACE_START";
export const GET_PLACE_SUCCESS = "GET_PLACE_SUCCESS";
export const GET_PLACE_FAILURE = "GET_PLACE_FAILURE";

export const getPlaceSuggestions = (id) => dispatch => {
    console.log("get place suggestions");
    dispatch({type: GET_PLACE_START})
    axiosWithAuth().get(`/vacations/${id}/suggestions`)
        .then(res => {
            dispatch({type: GET_PLACE_SUCCESS, payload: res.data})
            console.log("data", res.data);
        })
        .catch(err => console.log(err));
}

/***********add comment*************/

export const ADD_COMMENT_START = "ADD_COMMENT_START";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";



export const addComment = (id, comment) => dispatch => {
    dispatch({ type: ADD_COMMENT_START});
    axiosWithAuth().post(`/vacations/${id}/comments/add`, comment)
        .then(res => {
            console.log("New place added!");
            dispatch({ type: ADD_COMMENT_SUCCESS, payload: comment})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_COMMENT_FAILURE, payload: `${err}`})
        });

}