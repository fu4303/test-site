import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
