import React, { Component } from "react";
// import CalendarHeaderNumbersOfWeek from "./CalendarHeaderNumbersOfWeek";
import { getStartOfWeek, generateWeekRange } from "./Utils";

class CalendarHeader extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                weeksName: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
            });
    }

    render() {
        const headerDays = this.state.weeksName.slice();
        const monday = this.props.monday;
        const weekArray = generateWeekRange(monday);
        const weeksNum = weekArray.slice();

        let i = 0;
        return (
            <header className="calendar__header">
                {headerDays.map((day) => {
                    return (
                        <div key={day} className="calendar__header-day">
                            {day}
                            <div className="calendar__header-num">
                                {weeksNum[i++]}
                            </div>
                        </div>
                    );
                })}
            </header>
        );
    }
}

export default CalendarHeader;
