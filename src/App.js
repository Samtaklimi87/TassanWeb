import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './components/pages';
import SigninPage from './components/pages/SignIn';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/page1" component={Page1} /> */}
        <Route path="/signin" component={SigninPage} />
        {/* <Route path="/page3" component={Page3} /> */}
      </Switch>
    </Router>
  );
}

export default App;
