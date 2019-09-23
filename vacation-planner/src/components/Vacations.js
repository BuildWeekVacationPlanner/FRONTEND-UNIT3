import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Vacations = () => {

    const [newTrip, setNewTrip] = useState({title: "", location: "", date: "", description: ""})

    const handleChange = e => {
        setNewTrip({...newTrip, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e, creds) => {
        e.preventDefault();
        console.log(newTrip);
        axiosWithAuth().post("/vacations/add", creds)
            .then(res => console.log("Success!"))
            .catch(err => console.log(err));

    }

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
                                name="date"
                                value={newTrip.date}
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
            </div>
        </div>
    );
}

export default Vacations;