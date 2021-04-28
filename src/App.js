import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <>
    <NavBar />
    <main className="container">
    {/* shortcut: Route[path][component]*4 */}
      <Switch>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found" />
      </Switch>
    </main>
    </>
  );
}

export default App;
