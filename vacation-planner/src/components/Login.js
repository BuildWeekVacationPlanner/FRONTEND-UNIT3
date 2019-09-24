import React, { useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const StyledInput = Styled.input`
width: 188px;
padding: 15px 25px;font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
font-size: 14px;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256,256,256,1.0);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
-moz-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
margin-top:25px

&:hover {
    background: #dfe9ec;
    color: #414848;
}

&:focus{
    background: #dfe9ec;
    color: #414848;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
	-moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
	-webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
}

`;

const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: #fff;
cursor: pointer;
width: 100%
margin-top:25px;
font-weight:bold;
font-size:14px;
height:50px;
border-radius:5px
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

  const login = e => {
    e.preventDefault();
    axios
      .get("https://reqres.in/api/users", userForm)
      .then(res => {})
      .catch(err => {
        return err.message;
      });
  };

  return (
    <Formik
      initialValues={userForm}
      onSubmit={login}
      render={props => {
        return (
          <div>
            <StyledForm>
              <h2>Login page</h2>
              <StyledDiv clasName="content">
                <StyledInput
                  className="input"
                  type="text"
                  name="email"
                  value={userForm.email}
                  onChange={onNameChange}
                  placeholder="example@email.com"
                />
                <StyledInput
                  className="input"
                  type="password"
                  name="password"
                  value={userForm.password}
                  onChange={onNameChange}
                  placeholder="Enter password"
                />
                <StyledButton onClick={login}>Login</StyledButton>
                <p>Don't ahve an account? </p>
                <Link to="/"> Signup here</Link>
              </StyledDiv>
            </StyledForm>
          </div>
        );
      }}
    />
  );
};

export default Login;
