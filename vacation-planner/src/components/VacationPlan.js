import React, { useState } from "react";

const VacationPlan = () => {
    let [ friends, setFriends ] = useState({friends: []});
    let [ places, setPlaces ] = useState({places: []});
    let [ toDos, setToDos ] = useState({});
    let [ message, setMessage ] = useState({ username: "", topic: "", message: ""});
    let [ messageList, setMessageList ] = useState({messages: []})

    const handleFriends = e => {
        setFriends({friends: [...friends, e.target.value]})
    }

    const handlePlaces = e => {
        setPlaces({places: [...places, e.target.value] })
    }

    const handleToDos = e => {
        setToDos({todos: [...toDos, e.target.value]})
    }

    const handleMessages = e => {
        setMessage({...message, [e.target.name]: e.target.value});
        console.log("message", message);
    }

    const submitMessages = (e) => {
        e.preventDefault();
        setMessageList({messages: [message]});
        console.log("You clicked submit", messageList);
    }

    
    return (
        <div>
        <h2>Plan your vacation! Bring along friends!</h2>
        <div>
            <h3>Add friends and family to your trip</h3>
            <form>
                <input 
                    value={friends.friends} 
                    name="friends" 
                    placeholder="add friends and family" 
                    onChange={(e) => handleFriends(e)}/>
                <button>+</button>
            </form>
        </div>
        <form>
            <label>Places to go</label>
            <input 
                value={places.places}
                name="places"
                placeholder="Where will you go?"
                onChange={(e) => handlePlaces(e)}
             />
            <button>+</button>
        </form>
        <form>
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

export default VacationPlan;