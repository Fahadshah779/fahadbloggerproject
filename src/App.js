import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import NotFound from "./components/Pages/NotFound";
import About from "./components/Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
