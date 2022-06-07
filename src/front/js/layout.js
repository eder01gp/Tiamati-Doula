import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Home } from "./pages/home";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Form } from "./pages/form";
import { Profile_user } from "./pages/profile_user";
import { Profile_company } from "./pages/profile_company";

import { Birthplan } from "./pages/birthplan";

import { Bio } from "./pages/bio";
import { Faq } from "./pages/faq";
import { Services } from "./pages/services";
import { Checkout } from "./pages/checkout";


import { Documents } from "./pages/documents";


import injectContext from "./store/appContext";

import { Redirect } from "react-router-dom";


const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { store } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile_user">
              {localStorage.getItem("token") ? (
                <Profile_user />
              ) : (
                <Redirect to="/"></Redirect>
              )}
            </Route>
            <Route exact path="/profile_company">
              {localStorage.getItem("token") ? (
                <Profile_company />
              ) : (
                <Redirect to="/"></Redirect>
              )}
            </Route>
            <Route exact path="/documents">
              <Documents />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/faq">
              <Faq />
            </Route>
            <Route exact path="/bio">
              <Bio />
            </Route>
            <Route exact path="/birthplan">
              <Birthplan />
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
