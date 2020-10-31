
import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import "./app.css";





import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";
import LandingPageContainer from './landing/landing_container';
import DogRegisterContainer from '../components/dog/dog_registration_container';
import ProfileContainer from "../components/profile/profile_container";
import FeedContainer from "../components/feed/feed_container";
import AboutContainer from "../components/about/about_container"


const App = () => (
  <div>
    {/* <Header/> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <AuthRoute exact path="/about" component={AboutContainer} />
      <Route exact path="/dogs" component={DogRegisterContainer }/>
      <ProtectedRoute exact path="/profile" component={ProfileContainer}/>
      <ProtectedRoute exact path="/feed" component={FeedContainer} />
      <AuthRoute path='/' component={LandingPageContainer} />

    </Switch>

  </div>
);

export default App;