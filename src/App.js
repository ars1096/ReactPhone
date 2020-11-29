import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPhone from "./views/addPhone";
import Infophone from "./views/infoPhone";
import RootView from "./views/rootView";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route path="/contacto/:id" component={Infophone} />
        <Route path="/addPhone" component={AddPhone} />
        <Route path="/" component={RootView} />
      </Switch>
    </Router>
  );
}

export default App;
