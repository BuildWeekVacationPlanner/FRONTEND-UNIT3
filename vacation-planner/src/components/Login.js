import React, { useState } from "react";
import axios from "axios";
import Styled from "styled-components";

const StyledForm = Styled.form`

width: 300px;
	margin: 0 auto;
	position: relative;
	
	background: #f3f3f3;
	border: 1px solid #fff;
	border-radius: 5px;
	
	box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
`;

const StyledDiv = Styled.div`
padding: 0 30px 25px 30px;

`;

const longInForm = {
  email: "",
  password: ""
};

const Login = actions => {
  const [userForm, setUserForm] = useState(longInForm);

  const onNameChange = e => {
    const { name, value } = e.target;

    setUserForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const login = () => {
    axios
      .get("https://reqres.in/api/users", userForm)
      .then(res => {
        console.log(userForm);
        actions.resetForm();
      })
      .catch(err => {
        return err.message;
      });
  };

  return (
    <div>
      <StyledForm>
        <h2>Login page</h2>
        <StyledDiv></StyledDiv>
        <input
          type="text"
          name="email"
          value={userForm.email}
          onChange={onNameChange}
        />
        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={onNameChange}
        />
        <button onClick={login}>Login</button>
      </StyledForm>
    </div>
  );
};

export default Login;
