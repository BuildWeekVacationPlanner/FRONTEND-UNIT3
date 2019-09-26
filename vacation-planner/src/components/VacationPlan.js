import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { findTrip, addUserToTrip, addPlace, addComment, getComments, deleteUserFromTrip, getPlaceSuggestions } from "../actions/index"; 
import Styled from "styled-components";
import Nav from "./Nav";


const VacationPlan = ({trip, match, history, getComments, findTrip, deleteUserFromTrip, addPlace, badrequest, addComment, addUserToTrip, getPlaceSuggestions}) => {
    const [ friends, setFriends ] = useState({username: ""});
    let [ places, setPlaces ] = useState({suggestion: ""});
    let [ toDos, setToDos ] = useState({suggestion: ""});
    let [ message, setMessage ] = useState({ username: "", topic: "", message: ""});

    const id = match.params.id;

    // find information for this vacation

    useEffect(() => {
        findTrip(id);
        getPlaceSuggestions(id);
        getComments(id);
    }, []);


   
 
    //friends and family handlers

    const handleFriends = e => {
        e.preventDefault();
        setFriends({username: e.target.value})
    }

    const submitFriends = e => {
        e.preventDefault();
        addUserToTrip(friends, id);
        setFriends({username: ""})
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

    const deleteUser = (user) => {

       deleteUserFromTrip({"username": user}, id);
 
    }


    
    return (
        <>
        <Nav history={history}/>
        <div>
        
        <h2>{trip.title}</h2>

          <StyledDiv>
            <h3>Add friends and family to your trip</h3>
            <StyledForm onSubmit={submitFriends}>
                <StyledInput
                    type="text"
                    value={friends.username} 
                    name="username" 
                    placeholder="add friends and family" 
                    onChange={handleFriends}/>
                <StyledButton>+</StyledButton>

            </StyledForm>
                <h4>Friends</h4>
                {/* <ul> */}
                {!badrequest ? (
                    trip.users && trip.users.map( user => {
                        return <p key={trip.users.indexOf(user)}>{user} <button onClick={() => deleteUser( user)}>X</button></p>
                    }) 
                ) : (
                    <h5>{badrequest}</h5>
                 )}
    

        </StyledDiv>
        <StyledDiv>
            <StyledForm onSubmit={submitPlaces}>
                <Label>Places</Label>
                <StyledInput
                    type="text"
                    value={places.suggestion}
                    name="suggestion"
                    placeholder="Where will you go?"
                    onChange={(e) => handlePlaces(e)}
                />
                <StyledButton>+</StyledButton>
            </StyledForm>
        </StyledDiv>
        <StyledDiv>
            <StyledForm onSubmit={submitToDos}>
                <Label>Todos</Label>
                <StyledInput
                    type="text"
                    value={toDos.suggestion}
                    name="suggestion"
                    placeholder="Where will you go?"
                    onChange={(e) => handleToDos(e)}
                />
                <StyledButton>+</StyledButton>
            </StyledForm>
 
        </StyledDiv>

        <div>
            <h3>Leave a message for your group</h3>
            <StyledForm onSubmit={submitMessages}>
                <Label>Topic</Label>
                <StyledInput
                    name="topic"
                    value={message.title}
                    placeholder="title"
                    onChange={handleMessages}
                />
                <Label>Your name</Label>
                <StyledInput
                    name="username"
                    value={message.username}
                    placeholder="username"
                    onChange={handleMessages}
                />
                <Label>Message</Label>
                <StyledInput
                    name="message"
                    onChange={handleMessages}
                    value={message.message}
                    placeholder="message goes here"
                />
                <StyledButton>+</StyledButton>
            </StyledForm>
        </div>
       </div>
       </>
    );
}

const mapStateToProps = state => {
    return {
        vacations: state.vacations,
        trip: state.mytrip,
        badrequest: state.error
    }
}


export default connect(mapStateToProps, {findTrip, deleteUserFromTrip, getComments, addUserToTrip, addComment, addPlace, getPlaceSuggestions})(VacationPlan);




const StyledForm = Styled.form`
    padding: 20px; 30px 25px 30px;
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
    margin-top: 10px;
    margin-bottom: 5px;
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



const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: #fff;
cursor: pointer;
font-weight:bold;
font-size:14px;
text-align: center;
border-radius:50%;
margin: 0 auto;
margin-top: 10px;
width: 30px;
height: 30px;
&:hover{
  background:skyblue
}
`;

const StyledDiv = Styled.div`
    border-bottom: 3px gray solid;
    margin-top: 30px;
`
