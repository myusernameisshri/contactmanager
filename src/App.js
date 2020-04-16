import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './Components/contacts/Contacts';
import './App.css';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import AddContact from './Components/contacts/AddContact';
import EditContact from "./Components/contacts/EditContact";
import Header from "./Components/layout/Header";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import Test from './Components/test/Test';

function App() {
  render()
  {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/addContact" component={AddContact} />
              <Route exact path="/contact/editContact/:id" component={EditContact} />
              <Route exact path="/about/:id" component={About} />
              <Route exact path="/test" component={Test} />
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
//Earlier one <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
//Earlier one <Contact name="Karen Dev" email="kd@gmail.com" phone="333-355-3355" />
