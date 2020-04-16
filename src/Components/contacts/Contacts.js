import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context';
class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts }=value;
                    return (
                        <React.Fragment>
                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>

                        {contacts.map(contact =>
                    <Contact name={contact.name} email={contact.email} phone={contact.phone} id={contact.id} />
                )}
                </React.Fragment>
                );
                }}
                </Consumer>
        );
     }
}
export default Contacts;
//deleteClickHandler={this.deleteContact.bind(this, contact.id)}
/* deleteContact=id=>{
      const { contacts }=this.state;
      const newContacts= contacts.filter(contact=>
          contact.id!==id);
      this.setState({
          contacts:newContacts
      });
      };*/