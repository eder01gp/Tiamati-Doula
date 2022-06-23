import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Home } from "./pages/home";
import { LoginPage } from "./pages/loginPage";
import { SignupPage } from "./pages/signupPage";
import { Form } from "./pages/form";
import { Profile_user } from "./pages/profile_user";
import { Profile_company } from "./pages/profile_company";
import { Birthplan } from "./pages/birthplan";
import { Bio } from "./pages/bio";
import { Faq } from "./pages/faq";
import { Services } from "./pages/services";
import { Checkout } from "./pages/checkout";
import { Documents } from "./pages/documents";
import { Redirect } from "./pages/redirect";
import { User_appointment } from "./pages/user_appointment";
import { Modify_appointment } from "./pages/modify_appointment";
import { Appointment } from "./pages/appointment";


import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { store } = useContext(Context);

  return (
    <div className="page-container">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <div className="content-wrap">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signupPage">
                <SignupPage />
              </Route>
              <Route exact path="/form">
                <Form />
              </Route>
              <Route exact path="/loginPage">
                <LoginPage />
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
              <Route exact path="/redirect">
                <Redirect />
              </Route>
               <Route exact path="/appointment">
              <Appointment />
              </Route>
              <Route exact path="/user_appointment">
                <User_appointment />
              </Route>
              <Route exact path="/modify_appointment">
                <Modify_appointment />
              </Route>
                <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
