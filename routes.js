import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Teste from './pages/Teste'

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
{...rest}
render={props =>
isAuthenticated() ? (
<Component {...props} />
) : (
<Redirect to={{ pathname: "/", state: { from: props.location } }} />
    )
   }
 />
)
export default function Routes() {
return (
<BrowserRouter>
<Switch>
<Route path = '/' exact component={Login} />
<Route path = '/usuario' component={Cadastro} />
<PrivateRoute path="/teste" component={Teste} />
</Switch>
</BrowserRouter>
  )
}

const {Router} = require("express");
const routes = Router();
const UserController = require("./controllers/UserController");
const SessionController = require("./controlllers/SessionController");
const authMinddleWare = require("./middlewares/auth");
routes.post("/user",UserController.store);
routes.get("/user",UserController.list);
routes.get("/user/:email",UserController.index);
routes.put("/user/:id",UserController.update);
routes.delete("/user/:id",UserController.destroy);
routes.post("/session",SessionController.store);

module.exports = routes;

