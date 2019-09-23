import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Signup = props => {

    //state
    const [ newUser, setNewUser ] = useState({ username: "", password: ""});


    //new user info

    const handleNewUser = event => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const submitInfo = (event, creds) => {
        event.preventDefault();
        console.log(newUser);
        axios.post("https://bw-vacation-planner.herokuapp.com/api/auth/register", creds)
            .then(res => {
                props.history.push("/");
            })
            .catch(err => console.log(err));

    }



    //output

    return (
        <div>
            Sign up!
            <form onSubmit={(e) => submitInfo(e, newUser)}>
                <label>username</label>
                <input 
                    type="text" 
                    value={newUser.username}
                    name="username"
                    onChange={handleNewUser}
                />
                <label>password</label>
                <input 
                    type="text" 
                    value={newUser.password}
                    name="password"
                    onChange={handleNewUser} 
                />
                <button>Join the club!</button>
            </form>
            <div>Already part of the Vacation-Planner community? <Link to="/login">Log in</Link></div>
        </div>
    );
}

export default Signup;