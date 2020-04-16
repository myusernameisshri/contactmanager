import React, { Component } from "react";
import { Consumer } from "../../context";
import { v4 as uuidv4 } from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    // Clearing State
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  //onEmailChange = (e) => this.setState({ email: e.target.value });
  //onPhoneChange = (e) => this.setState({ phone: e.target.value });
  

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      value={name}
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      name="name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={email}
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      name="email"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      className="form-control form-control-lg"
                      placeholder="Enter Phone Number..."
                      name="phone"
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
