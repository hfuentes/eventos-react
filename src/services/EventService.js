export default class EventService {
    getEvents() {
        let birthdays = [
            {
                title: "Cumpleaños de Geraldine",
                name: "Geraldine",
                type: "Cumpleaños",
                birthday: new Date(1988, 6, 27),
                diffDays: this.calculateDaysLeftForBirthday(new Date(1988, 6, 27))
            },
            {
                title: "Cumpleaños de Máximo",
                name: "Máximo",
                type: "Cumpleaños",
                birthday: new Date(2008, 11, 1),
                diffDays: this.calculateDaysLeftForBirthday(new Date(2008, 11, 1))
            },
            {
                title: "Cumpleaños de Héctor",
                name: "Héctor",
                type: "Cumpleaños",
                birthday: new Date(1988, 2, 6),
                diffDays: this.calculateDaysLeftForBirthday(new Date(1988, 2, 6))
            }
        ];
        let payments = [];
        return {
            birthdays: birthdays,
            payments: payments
        };
    }

    calculateDaysLeftForBirthday(birthday) {
        const today = new Date();
        const bday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
        console.log(bday);
        if (today.getTime() > bday.getTime()) {
            bday.setFullYear(bday.getFullYear() + 1);
        }
        const diff = bday.getTime() - today.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
}