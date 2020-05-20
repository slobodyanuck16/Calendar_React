import React, { Component } from "react";
import { getStartOfWeek, generateWeekRange } from "../functions-and-gateway/Utils";

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
                            <div className="calendar__header-circle"></div>
                        </div>
                    );
                })}
            </header>
        );
    }
}

export default CalendarHeader;
