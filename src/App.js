import Board from "./components/Board";
import Todos from "./components/Todos";
import ProductsList from "./components/ProductsList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      {/* <Board />
      <hr />
      <Todos />
      <hr /> */}
      {/* <ProductsList /> */}
      <div class="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">SHop</NavLink>
        <NavLink to="/todos">ToDos</NavLink>
      </div>
      <h1>APP.JS</h1>
    </div>
  );
}

export default App;
