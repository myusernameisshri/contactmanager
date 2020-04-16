import React, { Component } from 'react'
import {Consumer} from '../../context';
//import {v4 as uuidv4} from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors:{}
  };
  onSubmit = async (dispatch, e) => {
                                e.preventDefault();

                                const { name, email, phone } = this.state;

                                if (name === "") {
                                  this.setState({
                                    errors: { name: "Name is Required" },
                                  });
                                  return;
                                }
                                if (email === "") {
                                  this.setState({
                                    errors: { email: "Email is Required" },
                                  });
                                  return;
                                }
                                if (phone === "") {
                                  this.setState({
                                    errors: {
                                      phone: "Phone Number is Required",
                                    },
                                  });
                                  return;
                                }

                                const newContact = {
                                  //id: uuidv4(),
                                  name,
                                  email,
                                  phone,
                                };
                                //This is added after the concept of http request concept prior it was only dispatch({ type: "ADD_CONTACT", payload: newContact });
                                //This is added with the concept of promises:
                                /*axios
                                  .post(
                                    "https://jsonplaceholder.typicode.com/users",newContact)
                                  .then((res) =>
                                    dispatch({
                                      type: "ADD_CONTACT",
                                      payload: res.data,
                                    }));*/
                                //This is added with the new concept of async/await:
                                const res= await axios.post(
                                    "https://jsonplaceholder.typicode.com/users",newContact);
                                      dispatch({
                                      type: "ADD_CONTACT",
                                      payload: res.data,
                                    });
                                  
                                // Clearing State
                                this.setState({
                                  name: "",
                                  email: "",
                                  phone: "",
                                  errors: {},
                                });
                                this.props.history.push("/");
                              };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name"
                    type="text"
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter Email"
                    type="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone Number"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone Number"
                    type="text"
                    onChange={this.onChange}
                    error={errors.phone}
                  />
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