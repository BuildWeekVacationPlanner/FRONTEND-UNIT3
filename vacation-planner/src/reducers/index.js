import { GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE } from "../actions";
import {ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE} from "../actions";
import {FIND_TRIP_BY_ID_START, FIND_TRIP_BY_ID_SUCCESS, FIND_TRIP_BY_ID_FAILURE} from "../actions";
import { ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "../actions";
import { ADD_PLACE_START, ADD_PLACE_SUCCESS, ADD_PLACE_FAILURE } from "../actions";
import { GET_PLACE_START, GET_PLACE_SUCCESS, GET_PLACE_FAILURE } from "../actions";
import { ADD_COMMENT_START, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from "../actions";
import { DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "../actions"
import { ADD_TODOS_START, ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE } from "../actions";
import { GET_TODOS_START, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from "../actions";
import { GET_COMMENT_START, GET_COMMENT_SUCCESS, GET_COMMENT_FAILURE } from "../actions";
import { DELETE_PLACE_START, DELETE_PLACE_SUCCESS, DELETE_PLACE_FAILURE } from "../actions"
import { DELETE_TODO_START, DELETE_TODO_SUCCESS , DELETE_TODO_FAILURE  } from "../actions";
import { DELETE_COMMENT_START, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE } from "../actions";

const initialState = {
    vacations: [],
    mytrip: {
        users:[],
        suggestions: [],
        comments: []
    },

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
                mytrip: {...state.mytrip,
                    users: [...state.mytrip.users, action.payload]}
            } 

        case ADD_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ADD_PLACE_START:
            return {
                ...state
            }
        case ADD_PLACE_SUCCESS:
            return {
                ...state
            }
        case ADD_PLACE_FAILURE:
            return {
                ...state
            }
        case GET_PLACE_START:
            return {
                ...state
            }
        case GET_PLACE_SUCCESS: 
            return {
                ...state,
                mytrip: {...state.mytrip,
                    suggestions: [...state.mytrip.suggestions, action.payload]
                }
            } 
        case GET_PLACE_FAILURE:
            return {
                ...state
            }
        case ADD_COMMENT_START:
            return {
                ...state
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                mytrip: {
                    ...state.mytrip,
                    comments: [...state.mytrip.comments, action.payload]
                }
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_USER_START:
            return {
                ...state
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                mytrip: {
                    ...state.mytrip,
                    users: state.mytrip.users.filter(user => user !== action.payload)
                }
            }
        case DELETE_USER_FAILURE:
            return {
                ...state
            }
        case ADD_TODOS_START:
            return {
                ...state
            } 
        case ADD_TODOS_SUCCESS:
            return {
                ...state,
                mytrip: {
                    ...state.mytrip,
                    suggestions: [...state.mytrip.todos, action.payload]
                }
            }
        case ADD_TODOS_FAILURE:
            return {
                ...state
            }
        case GET_TODOS_START: 
            return {
                ...state,
                isFetching: true,
                
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                suggestions: [...state.mytrip.todos, action.payload]

            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_COMMENT_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case GET_COMMENT_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                mytrip: {
                    ...state.mytrip,
                    comments: action.payload

                }
            } 
        case GET_COMMENT_FAILURE:
            return {
                ...state
            }
        case DELETE_PLACE_START:
            return {
                ...state
            } 
        case DELETE_PLACE_SUCCESS:
            return {
            }
        case DELETE_PLACE_FAILURE: 
            return {
                ...state
            }
        case DELETE_TODO_START:
            return {
                ...state
            } 
        case DELETE_TODO_SUCCESS:
            return {
                ...state
            }
        case DELETE_TODO_FAILURE:
            return {
                ...state
            }
        case DELETE_COMMENT_START:
            return {
                ...state
            } 
        case DELETE_COMMENT_SUCCESS: 
            return {
                ...state
            }
        
        case DELETE_COMMENT_FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}