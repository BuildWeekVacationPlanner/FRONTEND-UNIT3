import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { findTrip } from "../actions/index"; 



const VacationPlan = ({trip, match, findTrip}) => {
    let [ friends, setFriends ] = useState("");
    let [ places, setPlaces ] = useState("");
    let [ toDos, setToDos ] = useState("");
    let [ message, setMessage ] = useState({ username: "", topic: "", message: ""});

    // find information for this vacation

    useEffect(() => {
        findTrip(match.params.id);
    }, [])
   
 
    //friends and family handlers

    const handleFriends = e => {
        setFriends(`${e.target.value}`)
    }

    const submitFriends = e => {
        e.preventDefault();
        console.log("submit", friends)
    }

    //places handlers

    const handlePlaces = e => {
        setPlaces(`${e.target.value}`)
    }

    const submitPlaces = e => {
        e.preventDefault();
        console.log("place", places)
    }


    //toDo handlers

    const handleToDos = e => {
        setToDos(`${e.target.value}`);
    }

    const submitToDos = e => {
        e.preventDefault();
        console.log("successful todo submission", toDos);
    }


    //message handlers
    const handleMessages = e => {
        setMessage({...message, [e.target.name]: e.target.value});
    }


    const submitMessages = (e) => {
        e.preventDefault();
        console.log("Hi!", message);
    }

    
    return (
        <div>
        <h2>{trip.title}</h2>
        <div>
            <h3>Add friends and family to your trip</h3>
            <form onSubmit={submitFriends}>
                <input 
                    value={friends.friends} 
                    name="friends" 
                    placeholder="add friends and family" 
                    onChange={(e) => handleFriends(e)}/>
                <button>+</button>
            </form>
        </div>
        <form onSubmit={submitPlaces}>
            <label>Places to go</label>
            <input 
                value={places.places}
                name="places"
                placeholder="Where will you go?"
                onChange={(e) => handlePlaces(e)}
             />
            <button>+</button>
        </form>
        <form onSubmit={submitToDos}>
            <label>Stuff to do</label>
            <input  
                value={toDos.todos}
                name="todos"
                placeholder="What will you do?"
                onChange={(e) => handleToDos(e)}
            />
            <button>+</button>
        </form>
        <div>
            <h3>Leave a message for your group</h3>
            <form onSubmit={submitMessages}>
                <label>Topic</label>
                <input 
                    name="topic"
                    value={message.title}
                    placeholder="title"
                    onChange={handleMessages}
                />
                <label>Your name</label>
                <input 
                    name="username"
                    value={message.username}
                    placeholder="username"
                    onChange={handleMessages}
                />
                <label>Message</label>
                <input 
                    name="message"
                    onChange={handleMessages}
                    value={message.message}
                    placeholder="message goes here"
                />
                <button>+</button>
            </form>
        </div>
       </div>
    );
}

const mapStateToProps = state => {
    console.log("from state", state.vacations);
    return {
        vacations: state.vacations,
        trip: state.mytrip
    }
}


export default connect(mapStateToProps, {findTrip})(VacationPlan);

// export default VacationPlan;