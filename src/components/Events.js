import React from 'react';

export default class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let bOrder = this.props.events.birthdays.sort((x,y)=>x.diffDays-y.diffDays);
        return bOrder.map((birthday, i) => {
            return (
                <div key={i} className="jumbotron mt-3">
                    <h1>{birthday.title}</h1>
                    <p className="lead">Faltan {birthday.diffDays} días para el cumpleaños de {birthday.name}</p>
                </div>
            );
        });
    }
}