// IMPORT DEPENDENCIES
import React from "react";
import { Route } from "react-router-dom";

// IMPORT CONTENTS
import LandingPage from "./views/LandingPage/LandingPage";
import FelhasznalokBase from "./views/Felhasznalok/FelhasznalokBase";

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" render={() => <LandingPage />} />
      <Route path="/felhasznalok" render={() => <FelhasznalokBase />} />
    </React.Fragment>
  );
}

export default Routes;
