import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";

import Navbar from "./components/Navbar";

import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
     
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} /> 
      </Wrapper>
 
    </div>
  </Router>
);

export default App;
