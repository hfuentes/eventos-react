import React from 'react';

export default class Birthday extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.birthday.title}</h5>
                        <p className="card-text">
                            Faltan {this.props.birthday.daysLeftForBirthday} días para el cumpleaños de {this.props.birthday.name}
                            &nbsp;{this.props.birthday.gender == "male" ? "(" + this.props.birthday.age + ")" : ""}
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}