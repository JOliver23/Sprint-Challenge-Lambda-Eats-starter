import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";


const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route>
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
