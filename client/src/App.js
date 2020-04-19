import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Search from "./pages/Search"
// import Saved from "./pages/Saved"

function App() {
  return (
    <div>
    <NavBar />
    <Header />
    <HashRouter basename="/">
      <Switch>
        {/* <Route exact path="/saved" component={Saved} /> */}
        <Route exact path="*" component={Search} />
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
