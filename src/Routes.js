import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Component/Landing/Landing";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default Routes;
