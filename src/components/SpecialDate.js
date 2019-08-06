import React from 'react';

export default class SpecialDate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.specialDate.title}</h5>
                    <p className="card-text">
                        {this.props.specialDate.repetitionText}
                    </p>
                </div>
            </div>
        );
    }
}