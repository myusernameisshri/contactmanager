import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  //This is with the use of promises :
  /*onDeleteClick=(id,dispatch)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
   .then(res=> dispatch({type: 'DELETE_CONTACT',payload: id}));
  };*/
  //This is with the new concept of async and await :
  onDeleteClick= async (id,dispatch)=>{
   await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props;
    console.log(this.props);
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-caret-down"
                  style={{ fontSize: 15, cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  class="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                <Link to={`contact/editContact/${id}`}>
                  <i
                    class="fas fa-pencil-alt"
                    style={{ cursor: "pointer", float: "right", color: "black", marginRight:"1.3rem" }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes={
    name : PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };
export default Contact;