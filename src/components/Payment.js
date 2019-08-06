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
                        {
                            this.props.payment.daysToFinishPayment === 0 ?
                                <span>Felicidades! Este crédito ya debería estár pagado! (cierto?)</span> :
                                (
                                    <React.Fragment>
                                        <span>Te faltan {this.props.payment.daysToFinishPayment} días para terminar el crédito!</span><br />
                                        <span>Quedan solo {this.props.payment.monthsToFinish} cuotas para terminar! :)</span>
                                    </React.Fragment>
                                )
                        }
                    </p>
                </div>
            </div>
        );
    }
}