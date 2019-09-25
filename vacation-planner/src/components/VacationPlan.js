import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { findTrip, addUserToTrip, addPlace, addComment, deleteUserFromTrip, getPlaceSuggestions } from "../actions/index"; 
import Styled from "styled-components";


const VacationPlan = ({trip, match, findTrip, deleteUserFromTrip, addPlace, badrequest, addComment, addUserToTrip, getPlaceSuggestions}) => {
    let [ friends, setFriends ] = useState({username: ""});
    let [ places, setPlaces ] = useState({suggestion: ""});
    let [ toDos, setToDos ] = useState({suggestion: ""});
    let [ message, setMessage ] = useState({ username: "", topic: "", message: ""});

    const id = match.params.id;

    // find information for this vacation

    useEffect(() => {
        findTrip(id);
    }, []);

    // useEffect(() => {
    //     getPlaceSuggestions(id);
    // }, [])
   
 
    //friends and family handlers

    const handleFriends = e => {
        setFriends({username: e.target.value})
    }

    const submitFriends = e => {
        e.preventDefault();
        console.log("submit", friends);
        addUserToTrip(friends, id);
    }

    //places handlers

    const handlePlaces = e => {
        setPlaces({suggestion: e.target.value});
    }

    const submitPlaces = e => {
        e.preventDefault();
        addPlace(id, places);

    }


    //toDo handlers

    const handleToDos = e => {
        setToDos({suggestion: e.target.value});
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

    const deleteUser = (user, e) => {
        e.preventDefault();
        console.log(user, id);
       deleteUserFromTrip({"username": user}, id);
 
    }

    useEffect(() => {
        getPlaceSuggestions(id);
    }, [])
    
    return (
        <div>
        <h2>{trip.title}</h2>

          <StyledDiv>
            <h3>Add friends and family to your trip</h3>
            <StyledForm onSubmit={submitFriends}>
                <input 
                    value={friends.username} 
                    name="username" 
                    placeholder="add friends and family" 
                    onChange={(e) => handleFriends(e)}/>
                <button>+</button>

            </StyledForm>
                <h4>Friends</h4>
                <ul>
                {!badrequest ? (
                    trip.users && trip.users.map( user => {
                        return <li key={Date.now()}>{user} <button onClick={e => deleteUser(user, e)}>X</button></li>
                    }) 
                ) : (
                    <h5>{badrequest}</h5>
                 )}
{/*                 
                {trip.users.map( user => {
                        return <li key={Date.now()}>{user} <button onClick=>X</button></li>
                    })} */}
                
                </ul>
        </StyledDiv>
        <StyledDiv>
            <StyledForm onSubmit={submitPlaces}>
                <label>Places</label>
                <input 
                    type="text"
                    value={places.suggestion}
                    name="suggestion"
                    placeholder="Where will you go?"
                    onChange={(e) => handlePlaces(e)}
                />
                <button>+</button>
            </StyledForm>
            <StyledButton>Show places to go</StyledButton>
        </StyledDiv>
        <StyledDiv>
            <StyledForm onSubmit={submitToDos}>
                <label>Todos</label>
                <input 
                    type="text"
                    value={toDos.suggestion}
                    name="suggestion"
                    placeholder="Where will you go?"
                    onChange={(e) => handleToDos(e)}
                />
                <button>+</button>
            </StyledForm>
 
        </StyledDiv>

        <div>
            <h3>Leave a message for your group</h3>
            <StyledForm onSubmit={submitMessages}>
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
            </StyledForm>
        </div>
       </div>
    );
}

const mapStateToProps = state => {
    console.log(state.mytrip.suggestions);
    return {
        vacations: state.vacations,
        trip: state.mytrip,
        badrequest: state.error
    }
}


export default connect(mapStateToProps, {findTrip, deleteUserFromTrip, addUserToTrip, addComment, addPlace, getPlaceSuggestions})(VacationPlan);




const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 300px;
  margin: 0 auto;
  position: relative;
  text-align: left;
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = Styled.label`
    text-align: center;
`;
const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
font-size: 14px;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
text-align:center
`;

const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: #fff;
cursor: pointer;
font-weight:bold;
font-size:14px;
border-radius:50%;
&:hover{
  background:skyblue
}
`;

const StyledDiv = Styled.div`
    border-bottom: 3px gray solid;
`