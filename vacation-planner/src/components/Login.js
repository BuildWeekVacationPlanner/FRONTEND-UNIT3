import React, { useState} from "react";

import axios from "axios";

const Login = props => {

    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""});

    const handleReturningUser = e => {
        setReturningUser({...returningUser, [e.target.name]: e.target.value})
    }

    const submitReturningUser = (e, creds) => {
        e.preventDefault();
        axios.post("https://bw-vacation-planner.herokuapp.com/api/auth/login", creds)
            .then(res => {
                console.log("It worked!");
                props.history.push("/vacation");
                localStorage.setItem("token", res.data.token);
                console.log(res.data.token);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
        <h2>Login page</h2>
        <form onSubmit={(e) => submitReturningUser(e, returningUser)}>
            <input 
                name="username"
                value={returningUser.username}
                onChange={handleReturningUser}
            />
            <input 
                name="password"
                value={returningUser.password}
                onChange={handleReturningUser}
            />
            <button>Log in</button>
        </form>
        </div>
    );
}

export default Login;