import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
import { Signup } from "./pages/signup";
import { Form } from "./pages/form";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Redirect } from "react-router-dom";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/form">
              <Form />
               {store.logged == true ? <Form /> : <Redirect to="/"></Redirect> } 
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
