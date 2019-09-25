
import React, { useState} from "react";
import "./Login.css";
// import Styled from "styled-components";
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

//Reconcile everything below this line

// import { Link } from "react-router-dom";
// import { Formik, withFormik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";

// const StyledDiv = Styled.div`
// padding: 0 30px 25px 30px;

// `;

// const Div = Styled.div`
// margin-top:25px

// `;

// const StyledButton = Styled.button`
// background: #28d;
// border-color: transparent;
// color: #fff;
// cursor: pointer;
// width: 100%
// margin-top:25px;
// font-weight:bold;
// font-size:14px;
// height:50px;
// border-radius:5px
// `;

// const longInForm = {
//   email: "",
//   password: ""
// };

// const validationSchema = yup.object().shape({
//   email: yup.string().required("Email is a required field"),
//   password: yup.string().required("password is a required field")
// });

// const Login = () => {
//   const [userForm, setUserForm] = useState(longInForm);

//   const onSubmit = formValues => {
//     const memberToOnBoard = {
//       email: formValues.email,
//       password: formValues.password
//     };
//     setUserForm(memberToOnBoard);
//   };

//   return (
//     <Formik
//       validationSchema={validationSchema}
//       initialValues={longInForm}
//       onSubmit={onSubmit}
//       render={props => {
//         return (
//           <div>
//             <Form className="form">
//               <h2>Enter your login details</h2>

//               <StyledDiv clasName="content">
//                 <Div>
//                   <label htmlFor="email">Email</label>
//                   <Field
//                     className="field"
//                     name="email"
//                     id="email"
//                     type="email"
//                     placeholder="email@example.com"
//                   />
//                   <ErrorMessage
//                     style={{ color: "red" }}
//                     name="email"
//                     component="div"
//                   />
//                 </Div>

//                 <Div>
//                   <label htmlFor="password">Password</label>
//                   <Field
//                     className="field"
//                     id="password"
//                     name="password"
//                     type="password"
//                     placeholder="Enter password"
//                   />
//                   <ErrorMessage
//                     style={{ color: "red" }}
//                     name="password"
//                     component="div"
//                   />
//                 </Div>
//                 <StyledButton type="submit">Login</StyledButton>
//                 <div className="redirect-signup">
//                   <p>
//                     Don't have an account?
//                     <Link to="/signup"> Signup here</Link>
//                   </p>
//                 </div>
//               </StyledDiv>
//             </Form>
//           </div>
//         );
//       }}
//     />
//   );
// };

