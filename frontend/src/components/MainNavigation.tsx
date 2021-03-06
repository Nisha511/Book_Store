import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "../pages/book-listing";
import { RoutePaths } from "../utils/enum";

//component lazy loading
// const Home = lazy(() => import("../pages/login/index"));
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register"));

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Register}/>
      <Route exact path={'/login'} component={Login}/>
      <Route exact path={RoutePaths.BookListing} component={BookList} />
    </Switch>
  );
};

export default AppRoutes;
