import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";


// const submitReturningUser = (e, creds) => {
//     e.preventDefault();
//     axios.post("https://bw-vacation-planner.herokuapp.com/api/auth/login", creds)
//         .then(res => {
//             console.log("It worked!");
//             props.history.push("/vacation");
//             localStorage.setItem("token", res.data.token);
//             console.log(res.data.token);
//         })
//         .catch(err => console.log(err));
// }


const Nav = props => {

    const logMeOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        props.history.push("/");
    }

    return (
        <NavDiv>
            <Link>Marketing page</Link>
            <button onClick={logMeOut}>Log out</button>
        </NavDiv>
    );
}

export default Nav;

const NavDiv = Styled.div`
background: #28d;
padding: 60px;
`