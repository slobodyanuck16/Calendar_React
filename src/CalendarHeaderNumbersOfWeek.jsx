import React, { Component } from "react";

class CalendarHeaderNumbersOfWeek extends Component {
    state = {
        weeksNum: [],
    };

    // вернет дату понедельника той недели, в которую входит переданный день
    getStartOfWeek = (date) => {
        const dateCopy = new Date(date);
        const dayOfWeek = dateCopy.getDay();
        const difference =
            dayOfWeek === 0
                ? -6 // for Sunday
                : 1 - dayOfWeek;
        const monday = new Date(dateCopy.setDate(date.getDate() + difference));
        return new Date(
            monday.getFullYear(),
            monday.getMonth(),
            monday.getDate()
        );
    };

    // вернет массив из 7 дней, начиная и переданной даты
    generateWeekRange = (startDate) => {
        const result = [];
        for (let i = 0; i < 7; i += 1) {
            const base = new Date(startDate);
            result.push(new Date(base.setDate(base.getDate() + i)).getDate());
        }
        return result;
    };

    getWeek = () => {
        const monday = this.getStartOfWeek(new Date());
        const curWeek = this.generateWeekRange(monday);

        this.setState({
            weeksNum: curWeek,
        });
    };

    componentDidMount() {
        this.getWeek();
    }

    render() {
        const curWeek = this.state.weeksNum.slice();
        console.log(curWeek);
        
        return <div className="calendar__header-num">{curWeek.map(day => day)}</div>;
    }
}

export default CalendarHeaderNumbersOfWeek;
