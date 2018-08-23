import React from 'react';
import { BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';

const Header = () => (

    // No full page refresh, do javascript rendering instead
    <header className="header">
        <div className="content-container">  
            <div className="header__content">
            <h1>{"expensesbuddy".toUpperCase()}</h1>
            <Link to="/dashboard" className="header__title"> </Link>
            </div>
        </div>
    </header>
);

        // <NavLink to="/help" activeClassName="is-active"> help page </NavLink>
        // <NavLink to="/create" activeClassName="is-active">
        // </NavLink>
export default Header;