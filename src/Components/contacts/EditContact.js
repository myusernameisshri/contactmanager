import React, { Component } from "react";
import { Consumer } from "../../context";
//import {v4 as uuidv4} from 'uuid';
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
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
    const updContact = {
      name,
      email,
      phone
    }
    const {id} =this.props.match.params;
    const res1= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);
     dispatch({
       type: "UPDATE_CONTACT",
       payload: res1.data,
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

  async componentDidMount()
  {
    const id=this.props.match.params.id;
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone
    });
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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
export default EditContact;