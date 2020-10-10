import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Apoinment from './Components/ApoinmentPage/Apoinment/Apoinment';
import Login from './Components/LoginPage/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/apoinment">
          <Apoinment></Apoinment>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.provider>
  );
}

export default App;
