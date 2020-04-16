//April 15,2020
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import "./App.css";
import { render } from "@testing-library/react";
import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./Components/contacts/AddContact";
function App() {
  render();
  {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <AddContact />
              <Contacts />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
//Earlier one <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
//Earlier one <Contact name="Karen Dev" email="kd@gmail.com" phone="333-355-3355" />
