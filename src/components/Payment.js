import React from 'react';

export default class Payment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.payment.title}</h5>
                    <p className="card-text">
                        ..
                    </p>
                </div>
            </div>
        );
    }
}