import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import VacationListCard from "./VacationListCard";
import { getTrips, addNewTrip } from "../actions/index";


const Vacations = ({ vacations, getTrips, addNewTrip }) => {

    const [ newTrip, setNewTrip ] = useState({title: "", location: "", dates: "", description: ""});

    
    useEffect(() => {
        getTrips();
    }, [])



    /******* Create a new trip*********/
    const handleChange = e => {
        setNewTrip({...newTrip, [e.target.name]: e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTrip(newTrip);
        setNewTrip({title: "", location: "", dates: "", description: ""});
    }


    /***********What you see***********/

    return (
        <div>
            <h2>My Trips</h2>
            <div>
                <StyledForm onSubmit={e => handleSubmit(e, newTrip)}>
    
                        <StyledH3>Add new trip</StyledH3>
                        <label>
                            Title
                            <StyledInput 
                                name="title" 
                                value={newTrip.title} 
                                onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            Where to?
                            <StyledInput
                                name="location"
                                value={newTrip.location}
                                onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            Got dates?
                            <StyledInput
                                name="dates"
                                value={newTrip.dates}
                                onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            Description
                            <StyledInput
                                name="description"
                                value={newTrip.description}
                                onChange={e => handleChange(e)}
                            />
                        </label>
                    <button>+</button>
                </StyledForm>
            </div>
            <div>
                {vacations.map(vacation => <VacationListCard key={vacation.vacation_id} vacation={vacation}/>)}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log("mstp", state.vacations);
    return {
        vacations: state.vacations
    }
}
export default connect(mapStateToProps, {getTrips, addNewTrip})(Vacations);


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
`
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

const StyledParagraph = Styled.div`
text-align: center;
margin-top:15px
`;