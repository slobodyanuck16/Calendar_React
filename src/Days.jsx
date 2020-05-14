import React, { Component } from "react";
import { object } from "prop-types";
import { generateWeekRange } from "./Utils";

const generateWeekRangeFullDate = (startDate) => {
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const base = new Date(startDate);
        result.push(new Date(base.setDate(base.getDate() + i)));
    }
    return result;
};

class Days extends Component {
    getHours = (event, dayDate) => {
        return [
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
            {
                dayDate,
                event,
            },
        ];
    };

    render() {
        const fullArray = this.getHours(this.props.events, this.props.monday);
        console.log(fullArray);

        const week = generateWeekRangeFullDate(this.props.monday);

        const events = this.props.events;
        return (
            <>
                {fullArray.map((day) => {
                    return (
                        <div key={day} className="calendar__day-sell">
                            {events.map((event) => {
                                return (
                                    <div className="event">{`${event.title} 
                                 ${event.startTime} ${event.endTime}`}</div>
                                );
                            })}
                        </div>
                    );
                })}
            </>
        );
    }
}

export default Days;
