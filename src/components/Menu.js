import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to={ROUTES.LANDING}>Eventos</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={ROUTES.SIGN_IN}>Sing In</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Admin</a>
                        </li>
                        <li className="nav-item dropup">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">Menú</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown10">
                                <a className="dropdown-item" href="#">All</a>
                                <a className="dropdown-item" href="#">Credits</a>
                                <a className="dropdown-item" href="#">Any</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}