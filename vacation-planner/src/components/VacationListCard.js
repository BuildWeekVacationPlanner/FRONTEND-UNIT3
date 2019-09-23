import React from "react";

const VacationListCard = props => {
    return (
        <div className="vacation-list-card">
            <h1>{props.vacation.title}</h1>
            <p><strong>Dates: </strong>{props.vacation.dates}</p>
            <p><strong>Destination: </strong>{props.vacation.location}</p>
            <p><strong>Description: </strong>{props.vacation.description}</p>
        </div>
    );
}

export default VacationListCard;