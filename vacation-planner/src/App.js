import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Login from "./components/Login";
import VacationPlan from "./components/VacationPlan";
import Vacations from "./components/Vacations";

function App() {
  return (
    <div className="App">
      <h1>Vacation Planner App</h1>
      <Route exact path="/" component={Login} />
      <Route path="/vacation" component={Vacations}/>
      <Route path="/myvacation" component={VacationPlan}/>
    </div>
  );
}


export default App;
