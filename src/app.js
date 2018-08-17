
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const EditExpensePage = () => {
    <div>
        This is from my edit Expense component
    </div>
};

const HelpPage = () => {
    <div>
        HELP
    </div>
};




const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />   
            <Route path="/edit" component={EditExpensePage} />    
            <Route path="/help" component={HelpPage} />    
        </div>    
    </BrowserRouter>
)

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);