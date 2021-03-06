import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
