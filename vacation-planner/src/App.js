import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import VacationPlan from "./components/VacationPlan";
import Vacations from "./components/Vacations";

function App() {
  return (
    <div className="App">
      <h1>Vacation Planner App</h1>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/vacation" component={Vacations}/>
      {/* <Route exact path="/vacation/:id" render={props => <VacationPlan {...props} />} /> */}
      <PrivateRoute exact path={`/vacation/:id`} component={VacationPlan} />
    </div>
  );
}


export default App;
