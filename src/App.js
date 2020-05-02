import React, { useState} from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import { SCon } from "./Form-Styles";


const App = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = order => {
    const newOrder = {
      id: Date.now(),
      name: order.name,
      address: order.address
    };
    setOrder([...order, newOrder])
  };

  return (
    <SCon>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Now!</Link>
      </nav>

      <h1>Lambda Eats</h1>

      <Switch>
        <Route path="/pizza">
          <Form order={addToOrder}/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </SCon>
  );
};
export default App;
