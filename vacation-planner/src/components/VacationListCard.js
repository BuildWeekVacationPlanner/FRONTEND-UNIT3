import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const VacationListCard = props => {
    return (
        <Card className="vacation-list-card">
            <h1>{props.vacation.title}</h1>
            <p><strong>Dates: </strong>{props.vacation.dates}</p>
            <p><strong>Destination: </strong>{props.vacation.location}</p>
            <p><strong>Description: </strong>{props.vacation.description}</p>
            <button onClick={() => props.deleteTrip(props.vacation.vacation_id)}>Delete</button>
            <Link to={`/vacation/${props.vacation.vacation_id}`}>Details</Link>
        </Card>
    );
}



export default VacationListCard;

const Card = Styled.div`
    border: black solid 2px;
    border-radius: 5px;
    width: 250px;
    margin: 30px;
`