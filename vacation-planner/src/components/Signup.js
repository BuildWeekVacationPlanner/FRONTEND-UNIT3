import React, { useState } from "react";
import { Link } from "react-router-dom";


import axios from "axios";

import Styled from "styled-components";
import "./Login.css";







// const StyledDiv = Styled.div`
// 
// `;




    



const Signup = props => {
  //state
  const [newUser, setNewUser] = useState({ username: "", password: ""})

  const submitInfo = (event, creds) => {
    event.preventDefault();
    console.log(newUser);
    axios.post("https://bw-vacation-planner.herokuapp.com/api/auth/register", creds)
        .then(res => {
            props.history.push("/");
        })
        .catch(err => console.log(err));
      }

  // const { FirstName, LastName, email, password } = newUser;

  // const isDisabled = () => {
  //   if (!FirstName || !LastName || !email || !password) {
  //     return true;
  //   }
  // };
  const handleNewUser = event => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  // const submitInfo = (event, creds) => {
  //   event.preventDefault();

  //   axiosWithAuth()
  //     .post("/auth/register", creds)
  //     .then(res => {
  //       props.history.push("/");
  //     })
  //     .catch(err => console.log(err));
  // };


    return (
        <div>
            
            <StyledForm onSubmit={(e) => submitInfo(e, newUser)}>
                <StyledH3>Sign up!</StyledH3>
                    <label>username</label>
                    <StyledInput
                        type="text" 
                        value={newUser.username}
                        name="username"
                        onChange={handleNewUser}
                    />
                    <label>password</label>
                    <StyledInput 
                        type="text" 
                        value={newUser.password}
                        name="password"
                        onChange={handleNewUser} 
                    />
                <StyledButton>Join the club!</StyledButton>
            </StyledForm>
            <StyledParagraph>Already part of the Vacation-Planner community? <Link to="/login">Log in</Link></StyledParagraph>
        </div>
    );
}



//   //new user info


//   //output

//   return (
//     <div>
//       <StyledForm onSubmit={e => submitInfo(e, newUser)}>
//         <StyledDiv>
//           <StyledH3>Please sign up to get started</StyledH3>
//           <Div>
//             <label htmlFor="FirstName">First Name</label>
//             <StyledInput
//               type="text"
//               value={newUser.username}
//               name="FirstName"
//               id="FirstName"
//               onChange={handleNewUser}
//             />
//           </Div>

//           <Div>
//             <label htmlFor="LastName">Last Name</label>
//             <StyledInput
//               type="text"
//               id="LastName"
//               value={newUser.username}
//               name="LastName"
//               onChange={handleNewUser}
//             />
//           </Div>

//           <Div>
//             <label htmlFor="email">Email</label>
//             <StyledInput
//               type="email"
//               value={newUser.username}
//               name="email"
//               id="email"
//               onChange={handleNewUser}
//             />
//           </Div>

//           <Div>
//             <label htmlFor="password">password</label>
//             <StyledInput
//               type="password"
//               id="password"
//               value={newUser.password}
//               name="password"
//               onChange={handleNewUser}
//             />
//           </Div>
//           <StyledButton disabled={isDisabled()}>Join the club!</StyledButton>

//           <StyledParagraph>
//             Already part of the Vacation-Planner community?
//             <Link to="/login">Log in</Link>
//           </StyledParagraph>
//         </StyledDiv>
//       </StyledForm>
//     </div>
//   );
// };


export default Signup;


//styles

const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 300px;
  margin: 0 auto;
  position: relative;
  text-align: left;
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
font-size: 14px;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
text-align:center
`;

const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: #fff;
cursor: pointer;
width: 80%
margin-top:25px;
font-weight:bold;
font-size:14px;
height:50px;
border-radius:5px
&:hover{
  background:skyblue
}
`;

const StyledParagraph = Styled.div`
text-align: center;
margin-top:15px
`;
