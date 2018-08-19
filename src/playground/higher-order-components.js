// Higher order component (HOC) - A component that renders anoter component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> info </h1>
        <p> {props.info} </p>
    
    </div>
);

// higher order components
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>This is an authenticated user</p>}
            <WrappedComponent {...props} />      
        </div>
    );
};

// requiredAuthentication
const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There is user" />, document.getElementById('app'));
