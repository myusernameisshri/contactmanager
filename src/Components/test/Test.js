import React, { Component } from 'react'

class Test extends Component {
   state={
   title:'',
   body:'',
   name:'',
   phone:'',
   email:''
   };
    componentDidMount()
    {
       /* fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({
                name: data.name,
                email: data.email,
                phone: data.phone
            }));*/
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>console.log(data.name))
        }
   /* componentWillMount()
    {
    }
    componentDidUpdate()
    {
    }
    componentWillUpdate()
    {
    }
    componentWillReceiveProps(nextProps,nextState)
    {
    }*/
    render() {
        const {name,email,phone}= this.state;
        return (
            
            <div>
                <h5 className="">Life Cycle Methods</h5>
                <h1>{name}</h1>
        <p>{email} { phone}</p>
            </div>
        );
    }
}
export default Test;
