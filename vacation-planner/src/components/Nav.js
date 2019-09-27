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
            <Container>
            <Marketing href="https://buildweekvacationplanner.github.io/Marketing-UI/html/index.html">Landing Page</Marketing>
            <Logout onClick={logMeOut}>Log out</Logout>
            </Container>
        </NavDiv>
    );
}

export default Nav;

const NavDiv = Styled.div`
    background: #28d;
    padding: 60px;
`
const Container = Styled.div`
    width: 80%;
     display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

const Logout = Styled.button`
    height: 50px;
    border-radius: 5px;
    width: 90px;
    font-size: 20px;
`
const Marketing = Styled.button`
    height: 50px;
    border-radius: 5px;
    width: 90px;
    background: skyblue;
    font-size: 20px;
`