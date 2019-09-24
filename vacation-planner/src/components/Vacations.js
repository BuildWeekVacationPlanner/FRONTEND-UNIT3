import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import VacationListCard from "./VacationListCard";
import { getTrips } from "../actions/index";


const Vacations = ({ getTrips }) => {

    const [ newTrip, setNewTrip ] = useState({title: "", location: "", dates: "", description: ""});
    // const [ vacations, setVacations ] = useState({ vacations: []})


    /******* Get existing trips *********/
    // const getTrips = () => {
    //     axiosWithAuth().get("/vacations/")
    //         .then(res => {
    //             setVacations({vacations: res.data});
    //             console.log(vacations);
    //         })
    //         .catch(err => console.log(err))
    // }
    
    useEffect(() => {
        getTrips();
    }, [])




    /******* Create a new trip*********/
    const handleChange = e => {
        setNewTrip({...newTrip, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e, creds) => {
        e.preventDefault();
        console.log(newTrip);
        axiosWithAuth().post("/vacations/add", creds)
            .then(res => {
                getTrips();
            
            })
            .catch(err => console.log(err));

    }


    /***********What you see***********/

    return (
        <div>
            <h2>My Trips</h2>
            <div>
                <form onSubmit={e => handleSubmit(e, newTrip)}>
    
                        <h2>Add new trip</h2>
                        <label>
                            Title
                            <input 
                                name="title" 
                                value={newTrip.title} 
                                onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            Where to?
                            <input
                                name="location"
                                value={newTrip.location}
                                onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            Got dates?
                            <input
                                name="dates"
                                value={newTrip.dates}
                                onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            Description
                            <input
                                name="description"
                                value={newTrip.description}
                                onChange={e => handleChange(e)}
                            />
                        </label>
                    <button>+</button>
                </form>
            </div>
            <div>
                {/* map through vacations here. */}
                {/* {vacations.vacations.map(vacation => <VacationListCard key={vacation.id} vacation={vacation}/>)} */}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        vacations: state.vacations
    }
}
export default connect(mapStateToProps, {getTrips})(Vacations);

