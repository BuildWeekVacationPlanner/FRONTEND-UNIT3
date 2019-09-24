import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { findTrip, addUserToTrip, addPlace, addComment } from "../actions/index"; 



const VacationPlan = ({trip, match, findTrip, addPlace, addComment, addUserToTrip}) => {
    let [ friends, setFriends ] = useState({username: ""});
    let [ places, setPlaces ] = useState("");
    let [ toDos, setToDos ] = useState("");
    let [ message, setMessage ] = useState({ username: "", topic: "", message: ""});

    const id = match.params.id;

    // find information for this vacation

    useEffect(() => {
        findTrip(id);
    }, [])
   
 
    //friends and family handlers

    const handleFriends = e => {
        setFriends(`username: ${e.target.value}`)
    }

    const submitFriends = e => {
        e.preventDefault();
        console.log("submit", friends);
        addUserToTrip(friends, id);
    }

    //places handlers

    const handlePlaces = e => {
        setPlaces(`${e.target.value}`)
    }

    const submitPlaces = e => {
        e.preventDefault();
        addPlace(id, places);
        console.log("place", places);

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
        addComment(id, message);
    
    }

    
    return (
        <div>
        <h2>{trip.title}</h2>
        <div>
            <h3>Add friends and family to your trip</h3>
            <form onSubmit={submitFriends}>
                <input 
                    value={friends.friends} 
                    name="username" 
                    placeholder="add friends and family" 
                    onChange={(e) => handleFriends(e)}/>
                <button>+</button>
                <h4>Friends</h4>
                <ul>
                    <li>{trip.users}</li>
                </ul>
            </form>
        </div>
        <form onSubmit={submitPlaces}>
            <label>Places to go</label>
            <input 
                value={places}
                name="places"
                placeholder="Where will you go?"
                onChange={(e) => handlePlaces(e)}
             />
            <button>+</button>
        </form>
        <h4>Places to go...</h4>
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
    console.log(state.mytrip.users);
    return {
        vacations: state.vacations,
        trip: state.mytrip
    }
}


export default connect(mapStateToProps, {findTrip, addUserToTrip, addComment, addPlace})(VacationPlan);

// export default VacationPlan;