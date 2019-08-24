import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingIn from './components/Account/SingIn';
import SingUp from './components/Account/SingUp';
import * as ROUTES from './constants/routes';
import Menu from './components/Menu';

ReactDOM.render(
    <div className="container-fluid mt-3">
        <FirebaseContext.Provider value={Firebase}>
            <Router>
                <Route exact path={ROUTES.LANDING} component={App} />
                <Route exact path={ROUTES.SIGN_IN} component={SingIn} />
                <Route exact path={ROUTES.SIGN_UP} component={SingUp} />
                <Menu />
            </Router>
        </FirebaseContext.Provider>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();