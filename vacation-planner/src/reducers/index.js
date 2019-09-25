import { GET_TRIPS_START, GET_TRIPS_SUCCESS,
GET_TRIPS_FAILURE } from "../actions";
import {ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE} from "../actions";
import {FIND_TRIP_BY_ID_START, FIND_TRIP_BY_ID_SUCCESS, FIND_TRIP_BY_ID_FAILURE} from "../actions";
import { ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "../actions";
import { ADD_PLACE_START } from "../actions";

const initialState = {
    vacations: [],
    mytrip: {},
    isFetching: false,
    error: ""
}

export const reducer = (state=initialState, action) => {
    switch(action.type)  {
        case GET_TRIPS_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case GET_TRIPS_SUCCESS:
            return {
                ...state,
                vacations: action.payload,
                isFetching: false,
                error: ""
            }
        case GET_TRIPS_FAILURE: 
            return {
                isFetching: false,
                error: action.payload
            }
        case ADD_TRIP_START: 
            return {
                ...state,
                isFetching: false,
                error: ""
            }
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                vacations: [...state.vacations, action.payload],
                isFetching: false,
                error: ""
            }
        case ADD_TRIP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FIND_TRIP_BY_ID_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FIND_TRIP_BY_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mytrip: action.payload 
            } 
        case FIND_TRIP_BY_ID_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_USER_START:
            return {
                ...state
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                mytrip: {...state.mytrip, users: action.payload}
            } 
        case ADD_USER_FAILURE:
            return {

            }
        case ADD_PLACE_START:
            return {
                ...state
            }
        default:
            return state;
    }
}