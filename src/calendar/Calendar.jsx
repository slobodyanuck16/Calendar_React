import React, { Component } from "react";
import Day from "./Day";
import CalendarHeader from "./CalendarHeader";
import CalendarTimeScale from "./CalendarTimeScale";
import CalendarLines from "./CalendarLines";
import { generateWeekRangeFullDate } from "../functions-and-gateway/Utils";

class Calendar extends Component {
    render() {
        const monday = this.props.monday;
        const weekArrayWithFullDate = generateWeekRangeFullDate(monday);
        const onWeekBack = this.props.onWeekBack;
        const onWeekForward = this.props.onWeekForward;
        const getCurrentWeek = this.props.getCurrentWeek;
        const events = this.props.events;
        const handleEventDelete= this.props.handleEventDelete

        return (
            <section className="calendar">
                <CalendarHeader
                    onWeekBack={onWeekBack}
                    onWeekForvard={onWeekForward}
                    getCurrentWeek={getCurrentWeek}
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
                                        <Day
                                            events={events}
                                            day={daySell}
                                            handleEventDelete={handleEventDelete}
                                        />
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
