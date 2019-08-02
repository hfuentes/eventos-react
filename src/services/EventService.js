export default class EventService {
    getEvents() {
        let birthdays = [
            {
                title: "Cumpleaños de Geraldine",
                name: "Geraldine",
                type: "birthday",
                birthday: new Date(1988, 6, 27),
                gender: "female"
            },
            {
                title: "Cumpleaños de Máximo",
                name: "Máximo",
                type: "birthday",
                birthday: new Date(2008, 11, 1),
                gender: "male"
            },
            {
                title: "Cumpleaños de Héctor",
                name: "Héctor",
                type: "birthday",
                birthday: new Date(1988, 2, 6),
                gender: "male"
            },
            {
                title: "Cumpleaños de Juanito",
                name: "Juanito",
                type: "birthday",
                birthday: new Date(1959, 2, 6),
                gender: "male"
            }
        ];
        let payments = [
            {
                title: "Crédito de Consumo"
            }
        ];
        return {
            birthdays: birthdays.map(b => {
                b.daysLeftForBirthday = this.calculateDaysLeftForBirthday(b.birthday);
                b.age = this.calculateAge(b.birthday);
                return b;
            }),
            payments: payments
        };
    }

    calculateDaysLeftForBirthday(birthday) {
        let today = new Date();
        let bday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
        if (today.getTime() > bday.getTime()) {
            bday.setFullYear(bday.getFullYear() + 1);
        }
        let diff = bday.getTime() - today.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    calculateAge(birthday) {
        let today = new Date();
        let ageBase = today.getFullYear() - birthday.getFullYear();
        return (birthday.getMonth() < today.getMonth() && birthday.getDate() < today.getDate()) ? ageBase - 1 : ageBase;
    }
}