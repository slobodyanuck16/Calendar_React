import React, { Component } from "react";
import Days from "./Days";
import CalendarHeader from "./CalendarHeader";
import CalendarTimeScale from "./CalendarTimeScale";
import CalendarLines from "./CalendarLines";

class Calendar extends Component {
    state = {
        weeks: [1, 2, 3, 4, 5, 6, 7],
    };

    render() {
        const sells = this.state.weeks;

        const onWeekBack = this.props.onWeekBack;
        const onWeekForward = this.props.onWeekForward;
        const getWeek = this.props.getWeek;
        const weeksNum = this.props.weeksNum;
        const monday = this.props.monday;
        const events = this.props.events;

        return (
            <section className="calendar">
                <CalendarHeader
                    onWeekBack={onWeekBack}
                    onWeekForvard={onWeekForward}
                    getWeek={getWeek}
                    weeksNum={weeksNum}
                    monday={monday}
                />
                <div className="calendar__body">
                    <div className="calendar__week-container">
                        <CalendarTimeScale />
                        <CalendarLines />
                        <div className="calendar__week">
                            {sells.map((daySell) => {
                                return (
                                    <div
                                        key={daySell}
                                        className="calendar__day"
                                    >
                                        <div className="calendar__day-line"></div>
                                        <Days events={events} />
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
