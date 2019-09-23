import React, { useState } from "react";

const Signup = () => {
    const [ newUser, setNewUser ] = useState({ username: "", password: ""});

    const handleNewUser = event => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const submitInfo = event => {
        event.preventDefault();
        console.log(newUser);
    }

    return (
        <div>
            Sign up!
            <form onSubmit={submitInfo}>
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
        </div>
    );
}

export default Signup;