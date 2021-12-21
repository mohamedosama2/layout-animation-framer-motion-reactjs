import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
