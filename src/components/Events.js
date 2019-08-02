import React from 'react';
import Birthday from './Birthday';

export default class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let bOrder = this.props.events.birthdays.sort((x, y) => x.diffDays - y.diffDays);
        return bOrder.map((birthday, i) => {
            return (
                <div class="row">
                    <div class="col-sm">
                        <Birthday birthday={birthday} key={i} />
                    </div>
                    <div class="col-sm"></div>
                    <div class="col-sm"></div>
                </div>
            );
        });
    }
}