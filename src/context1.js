// April 15,2020
import React, { Component } from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload,
                ...state.contacts]
            };
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Yash Sharma",
                email: "yashsharma@gmail.com",
                phone: "222-222-2222"
            },
            {
                id: 2,
                name: "Henry Mark",
                email: "hnm@gmail.com",
                phone: "223-223-2232"
            },
            {
                id: 3,
                name: "Oliver Sliver",
                email: "ons@gmail.com",
                phone: "242-242-2422"
            }
        ],
        dispatch: action => this.setState(state =>
            reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;
