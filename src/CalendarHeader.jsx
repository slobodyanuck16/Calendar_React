import React, { Component } from "react";
import CalendarHeaderNumbersOfWeek from "./CalendarHeaderNumbersOfWeek";


class CalendarHeader extends Component {
    state = {
        weeksName: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    };

    render() {
        const headerDays = this.state.weeksName.slice()
        return (
                <header className="calendar__header">
                    {headerDays.map((day) => {
                                return (
                                <div key={this.state.weeksNum} className="calendar__header-day">
                                    {day}
                                <CalendarHeaderNumbersOfWeek weeksName={this.state.weeksName}/>
                                </div>
                            )})}
                </header>
        );
    }
}

export default CalendarHeader;