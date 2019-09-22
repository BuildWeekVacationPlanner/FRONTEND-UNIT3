import React, { useState } from "react";

const VacationPlan = () => {
    let [friends, setFriends] = useState({friends: []});
    let [places, setPlaces] = useState({places: []});
    let [toDos, setToDos] = useState({});
    let [message, setMessage ] = useState({ messages: {username: "", topic: "", message: ""}})

    const handleFriends = e => {
        setFriends({friends: [e.target.value]})
    }

    const handlePlaces = e => {
        setPlaces({places: [e.target.value] })
    }

    const handleToDos = e => {
        setToDos({todos: [e.target.value]})
    }

    
    return (
        <div>
        <h2>Plan your vacation! Bring along friends!</h2>
        <div>
            <h3>Add friends and family to your trip</h3>
            <form>
                <input value={friends.friends} name="friends" placeholder="add friends and family" onChange={(e) => handleFriends(e)}/>
                <button>+</button>
            </form>
        </div>
        <form>
            <label>Places to go</label>
            <input onChange={(e) => handlePlaces(e)} />
            <button>+</button>
        </form>
        <form>
            <label>Stuff to do</label>
            <input />
            <button>+</button>
        </form>
        <div>
            <h3>Leave a message for your group</h3>
            <form>
                <label>Topic</label>
                <input />
                <label>Your name</label>
                <input />
                <label>Message</label>
                <input />
                <button>+</button>
            </form>
        </div>
       </div>
    );
}

export default VacationPlan;