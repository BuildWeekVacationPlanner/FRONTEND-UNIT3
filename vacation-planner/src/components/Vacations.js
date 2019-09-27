import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import VacationListCard from "./VacationListCard";
import { getTrips, addNewTrip, deleteTrip } from "../actions/index";
import Nav from "./Nav";


const Vacations = ({ vacations, getTrips, deleteTrip, addNewTrip, history }) => {

    const [ newTrip, setNewTrip ] = useState({title: "", location: "", dates: "", description: ""});

    
    useEffect(() => {
        getTrips();
    }, [])



    /******* Create a new trip*********/
    const handleChange = e => {
        const {name, value} = e.target;
        setNewTrip({...newTrip, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTrip(newTrip);
        setNewTrip({title: "", location: "", dates: "", description: ""});
    }



    /***********What you see***********/

    return (
        <div>
            <Nav history={history}/>
            <h2>My Trips</h2>
            <div>
                <StyledForm onSubmit={e => handleSubmit(e, newTrip)}>
    
                        <StyledH3>Add new trip</StyledH3>
                        <Label>Title</Label>
                            <StyledInput 
                                name="title" 
                                value={newTrip.title} 
                                onChange={handleChange}
                            />
                        
                        <Label>
                            Where to?</Label>
                            <StyledInput
                                name="location"
                                value={newTrip.location}
                                onChange={handleChange}
                            />
                        
                        <Label>
                            Got dates?</Label>
                            <StyledInput
                                name="dates"
                                value={newTrip.dates}
                                onChange={handleChange}
                            />
                        
                        <Label>
                            Description
                            <StyledInput
                                name="description"
                                value={newTrip.description}
                                onChange={handleChange}
                            />
                        </Label>
                    <StyledButton>Add trip</StyledButton>
                </StyledForm>
            </div>
            <Container>
                {vacations.map(vacation => <VacationListCard key={vacation.vacation_id} deleteTrip={deleteTrip} vacation={vacation}/>)}
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        vacations: state.vacations
    }
}
export default connect(mapStateToProps, {getTrips, deleteTrip, addNewTrip})(Vacations);


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
    margin-top: 10px;
    margin-bottom: 5px;
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
margin-bottom: 10px;
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
border-radius: 5px;
width: 80%;
margin: 0 auto;
margin-top: 10px;
height: 50px;
&:hover{
  background:skyblue
}
`;

const StyledParagraph = Styled.div`
text-align: center;
margin-top:15px
`;

const Container = Styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
    justify-content: space-between;
    flex-wrap: wrap;
`
