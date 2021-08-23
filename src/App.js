import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './components/pages';
import SigninPage from './components/pages/SignIn';
import Navbar from './components/Navbar';
import Laminat from './components/pages/Laminat';
import Schilderen from './components/pages/Schilderen';
import Tegels from './components/pages/Tegels';
import Gallery from './components/pages/Gallery';


function App() {

  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/page1" component={Page1} /> */}
        <Route path="/contact" component={SigninPage} />
        {/* <Route path="/page3" component={Page3} /> */}
        <Route path="/laminat" component={Laminat} />
        <Route path="/schilderen" component={Schilderen} />
        <Route path="/tegels" component={Tegels} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
