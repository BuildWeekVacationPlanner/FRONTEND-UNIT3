import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import VacationPlan from "./components/VacationPlan";
import Vacations from "./components/Vacations";

function App() {
  return (
    <div className="App">
      <h1>Vacation Planner App</h1>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/vacation" component={Vacations} />
      <Route path="/myvacation" component={VacationPlan} />
    </div>
  );
}

export default App;
