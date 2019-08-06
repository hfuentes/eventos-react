import React from 'react';
import Birthday from './Birthday';
import Payment from './Payment';
import SpecialDate from './SpecialDate';

export default class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    renderBirthdays() {
        let bOrder = this.props.events.birthdays.sort((x, y) => x.diffDays - y.diffDays);
        return bOrder.map((birthday, i) => {
            return (
                <Birthday birthday={birthday} key={"birthday_" + i} />
            );
        });
    }
    renderPayments() {
        let pOrder = this.props.events.payments.sort((x, y) => x.daysToFinishPayment - y.daysToFinishPayment);
        return pOrder.map((payment, i) => {
            return (
                <Payment payment={payment} key={"payment_" + i} />
            );
        });
    }
    renderSpecialDates() {
        return this.props.events.specialDates.map((specialDate, i) => {
            return (
                <SpecialDate specialDate={specialDate} key={"special_date_" + i} />
            );
        });
    }
    render() {
        return (
            <div class="row">
                <div class="col-sm">
                    {this.renderBirthdays()}
                </div>
                <div class="col-sm">
                    {this.renderPayments()}
                </div>
                <div class="col-sm">
                    {this.renderSpecialDates()}
                </div>
            </div>
        );
    }
}