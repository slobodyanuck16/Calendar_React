import React, { Component } from "react";
import { generateWeekRangeFullDate } from "../functions-and-gateway/Utils";
import moment from "moment";

class CalendarHeader extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                weeksName: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                circle: new Date(),
            });
    }

    // componentDidMount() {
    // this.getSecondsToday();
    // setInterval(() => {
    //     this.getSecondsToday();
    // }, 60000);
    // }

    render() {
        const headerDays = this.state.weeksName.slice();
        const monday = this.props.monday;

        const weekArray = generateWeekRangeFullDate(monday);
        const weeksNum = weekArray.slice();

        let i = 0;
        return (
            <header className="calendar__header">
                {weeksNum.map((day) => {
                    return (
                        <div key={day} className="calendar__header-day">
                            {headerDays[i++]}
                            <div className="calendar__header-num">
                                {day.getDate()}
                            </div>
                            {moment(this.state.circle).format("YYYY-MM-DD") ===
                                moment(day).format("YYYY-MM-DD") && (
                                <div className="calendar__header-circle"></div>
                            )}
                        </div>
                    );
                })}
            </header>
        );
    }
}

export default CalendarHeader;
