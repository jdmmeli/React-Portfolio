import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/Nav/Nav";
import Contact from "./pages/Contact"
import Bio from "./pages/Bio"
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <Router>
      <>
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
