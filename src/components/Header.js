import React from 'react';
import { BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Header = () => (

    // No full page refresh
    <header>
        <h1>expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> go home </NavLink>
        <NavLink to="/create" activeClassName="is-active"> create </NavLink>
        <NavLink to="/edit" activeClassName="is-active" > edit page </NavLink>
        <NavLink to="/help" activeClassName="is-active"> help page </NavLink>
    </header>
);

export default Header;