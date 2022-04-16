import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginCom from "./Components/LoginCom";
import RegisterCom from "./Components/RegisterCom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginCom />
          </Route>
          <Route path="/reg">
            <RegisterCom />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
