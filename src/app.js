
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my Expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit Expense component
    </div>
);

const HelpPage = () => (
    <div>
        HELP
    </div>
);

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

const NotFoundPage = () => (
    <div>
        404! 
        <NavLink to="/"> go home </NavLink>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />   
                <Route path="/edit" component={EditExpensePage} />    
                <Route path="/help" component={HelpPage} />    
                <Route component={NotFoundPage} />
            </Switch>    
        </div>
    </BrowserRouter>
);

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);