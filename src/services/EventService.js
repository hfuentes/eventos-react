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
                title: "Crédito Operación",
                amountOfFees: 17,
                feeValue: 190813,
                endDate: new Date(2020, 7, 2)
            },
            {
                title: "Crédito pago CMR",
                amountOfFees: 17,
                feeValue: 163789,
                endDate: new Date(2020, 7, 24)
            },
            {
                title: "Crédito Falso",
                amountOfFees: 17,
                feeValue: 163789,
                endDate: new Date(2019, 8, 5)
            }
        ];
        let specialDates = [
            {
                title: "Navidad",
                repetitionType: "everyYear", //weekly, eachMonth, days, justOnce, everyday
                repetitionData: {
                    month: 12,
                    day: 25
                }
            },
            {
                title: "Viernes",
                repetitionType: "weekly",
                repetitionData: {
                    day: 4
                }
            }
        ];
        return {
            birthdays: birthdays.map(b => {
                b.daysLeftForBirthday = this.calculateDaysLeftForBirthday(b.birthday);
                b.age = this.calculateAge(b.birthday);
                return b;
            }),
            payments: payments.map(p => {
                p.daysToFinishPayment = this.calculateDaysToFinishPayment(p.endDate);
                p.monthsToFinish = this.calculateMonthsToFinishPayment(p.endDate);
                return p;
            }),
            specialDates: specialDates.map(e => {
                switch(e.repetitionType) {
                    case "everyYear": e.repetitionText = "Se repite cada año"; break;
                    case "weekly": e.repetitionText = "Se repite cada semana"; break;
                    case "eachMonth": e.repetitionText = "Se repite cada mes"; break;
                    case "days": e.repetitionText = "Se repite solo algunos días de la semana"; break;
                    case "justOnce": e.repetitionText = "No se repite"; break;
                    case "everyday": e.repetitionText = "Se repite todos los días"; break;
                    default: e.repetitionText = undefined;
                }
                return e;
            })
        };
    }

    calculateMonthsToFinishPayment(dateTo) {
        let dateFrom = new Date();
        return dateTo.getMonth() - dateFrom.getMonth() + 
          (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    }

    calculateDaysToFinishPayment(endDate) {
        let today = new Date();
        let diffTime = endDate.getTime() - today.getTime();
        let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
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