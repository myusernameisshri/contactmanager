import React from 'react'

export default function About(props) {
    return (
        <div>
           
            <h1 className="display-4">Contact Manager App</h1>
            <p className="lead">Simple Contact Management App to help you out to save and manage contacts</p>
            <h2>Version 1.0.0</h2>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}
