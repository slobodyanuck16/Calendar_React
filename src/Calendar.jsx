import React, { Component } from "react";
import Day from "./Day";
import CalendarHeader from "./CalendarHeader";
import CalendarTimeScale from "./CalendarTimeScale";
import CalendarLines from "./CalendarLines";
import { generateWeekRangeFullDate } from "./Utils";

class Calendar extends Component {
    render() {
        const monday = this.props.monday;
        const weekArrayWithFullDate = generateWeekRangeFullDate(monday)
        const onWeekBack = this.props.onWeekBack;
        const onWeekForward = this.props.onWeekForward;
        const getCurrentWeek = this.props.getCurrentWeek;
        const weeksNum = this.props.weeksNum;
        const events = this.props.events;

        return (
            <section className="calendar">
                <CalendarHeader
                    onWeekBack={onWeekBack}
                    onWeekForvard={onWeekForward}
                    getCurrentWeek={getCurrentWeek}
                    weeksNum={weeksNum}
                    monday={monday}
                />
                <div className="calendar__body">
                    <div className="calendar__week-container">
                        <CalendarTimeScale />
                        <CalendarLines />
                        <div className="calendar__week">
                            {weekArrayWithFullDate.map((daySell) => {
                                return (
                                    <div
                                        key={daySell}
                                        className="calendar__day"
                                    >
                                        <div className="calendar__day-line"></div>
                                        <Day events={events} day={daySell} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Calendar;
