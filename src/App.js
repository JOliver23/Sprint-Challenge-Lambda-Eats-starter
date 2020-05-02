import React, { useState} from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";


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
    <div>
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
    </div>
  );
};
export default App;
