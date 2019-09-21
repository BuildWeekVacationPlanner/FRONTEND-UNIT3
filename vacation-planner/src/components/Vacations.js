import React, { useState } from "react";

const Vacations = () => {

    const [newTrip, setNewTrip] = useState({trip: ""})

    const handleChange = e => {
        setNewTrip({trip: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newTrip);

    }

    return (
        <div>
            <h2>My Trips</h2>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>
                        Add new trip
                        <input name="trip" value={newTrip.trip} onChange={e => handleChange(e)}/>
                    </label>
                    <button>Create</button>
                </form>
            </div>
        </div>
    );
}

export default Vacations;