import React from 'react';

export default class Menu extends React.PureComponent {
    /*constructor(props) {
        super(props);
    }*/
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Eventos</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">CPR</a>
                        </li>
                        <li className="nav-item dropup">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">Ver</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown10">
                                <a className="dropdown-item" href="#">Todos</a>
                                <a className="dropdown-item" href="#">Créditos</a>
                                <a className="dropdown-item" href="#">Cumpleaños</a>
                                <a className="dropdown-item" href="#">Eventos</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}