import React from 'react';
import {Route} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import ViewFriends from "./components/ViewFriends";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route path="/login" component={Login}/>
      <PrivateRoute path="/add_friend" component={AddFriend}/>
      <PrivateRoute path="/view_friends" component={ViewFriends}/>
    </div>
  );
}

export default App;
