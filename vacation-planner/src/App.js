import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import VacationPlan from "./components/VacationPlan";
import Vacations from "./components/Vacations";

function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute exact path="/vacation" component={Vacations}/>
      <PrivateRoute path={`/vacation/:id`} component={VacationPlan} />

    </div>
  );
}

export default App;
