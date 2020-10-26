import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

// import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";


const App = () => (
  <div>
    {/* <Header/> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      {/* <AuthRoute exact path="/" component={MainPage} /> */}

    </Switch>
  </div>
);

export default App;
