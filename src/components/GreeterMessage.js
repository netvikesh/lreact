import React from 'react';

const GreeterMessage = (props) => {
    return (
        <div>
            <h1>Hello! {props.name}</h1>
            <p>{props.message}</p>
        </div>
    );
};

export default GreeterMessage;