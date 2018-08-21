import React from 'react';
import { BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';

const Header = () => (

    // No full page refresh, do javascript rendering instead
    <header>
        <h1>expenses app </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> go home </NavLink>
        <NavLink to="/create" activeClassName="is-active"> create </NavLink>
        <NavLink to="/help" activeClassName="is-active"> help page </NavLink>
    </header>
);

export default Header;