import React from "react";
import { Link } from "react-router-dom";

const VacationListCard = props => {
    return (
        <div className="vacation-list-card">
            <h1>{props.vacation.title}</h1>
            <p><strong>Dates: </strong>{props.vacation.dates}</p>
            <p><strong>Destination: </strong>{props.vacation.location}</p>
            <p><strong>Description: </strong>{props.vacation.description}</p>
            <button onClick={props.deleteTrip(props.vacation.vacation_id)}>Delete</button>
            <Link to={`/vacation/${props.vacation.vacation_id}`}>Details</Link>
        </div>
    );
}



export default VacationListCard;