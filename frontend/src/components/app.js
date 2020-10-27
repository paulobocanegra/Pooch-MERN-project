import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import MainPageContainer from './main/main_page_container';
import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";
import LandingPageContainer from './landing/landing_container'


const App = () => (
  <div>
    {/* <Header/> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute exact path="/" component={MainPageContainer} />
      <Route path='/landing' component={LandingPageContainer} />
    </Switch>
  </div>
);

export default App;
