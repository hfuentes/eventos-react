import React from 'react';

export default class WorkStuff extends React.Component {
    constructor(props) {
        super(props);
        this.in = props.workStuff.config.in;
        this.out = props.workStuff.config.out;
        this.state = {
            count: true
        };
        this.startStopCount();
    }
    startStopCount() {
        if (this.working()) {
            setInterval(() => {
                this.setState(prev => {
                    return prev.count = !prev.count;
                })
            }, 1000);
        }
    }
    calculateTimeToGoOut() {
        let today = new Date();
        let hours = this.out - today.getHours() - 1;
        let minutes = 60 - today.getMinutes();
        let seconds = 60 - today.getSeconds();
        return (hours > 0 ? hours + ' horas, ' : '') + (minutes > 0 ? minutes + ' minutos ' : '') + seconds + ' segundos';
    }
    working() {
        let today = new Date();
        let hours = today.getHours();
        return this.in <= hours && hours < this.out;
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Importante!</h5>
                        <p className="card-text">
                            <span>{
                                this.working() ? ('Faltan ' + this.calculateTimeToGoOut() + ' para salir del trabajo ...') :
                                    ('No trabajar!!!')
                            }</span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}