import React, { Component } from "react";
import Days from './Days';
import CalendarHeader from './CalendarHeader';
import CalendarTimeScale from './CalendarTimeScale';
import CalendarLines from './CalendarLines';

class Calendar extends Component {
    state = {
        weeks: [1, 2, 3, 4, 5, 6, 7],
    };

    generateNumbersRange = (from, to) => {
        const result = [];
        for (let i = from; i <= to; i++) {
            result.push(i);
        }
        return result;
    }

    render() {
        const sells = this.state.weeks;

        return (
            <section className="calendar">
                <CalendarHeader />
                <div className="calendar__body">
                    <div className="calendar__week-container">
                        <CalendarTimeScale />
                        <CalendarLines />
                        <div className="calendar__week">
                            {sells.map((daySell) => {
                                return (
                                <div key={daySell} className="calendar__day">
                                    <div className="calendar__day-line"></div>
                                    <Days />
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Calendar;
