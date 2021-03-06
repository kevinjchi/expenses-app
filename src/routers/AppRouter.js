import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';


const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />   
                <Route path="/edit/:id" component={EditExpensePage} />    
                <Route path="/help" component={HelpPage} />    
                <Route component={NotFoundPage} />
            </Switch>    
        <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;