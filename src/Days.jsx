import React, { Component } from "react";
import { object } from "prop-types";

class Days extends Component {
    addEventObj = (e) => {
        console.log(e.target);
    };

    render() {
        const dayEvents = [
            { time: "00:00" },
            { time: "01:00" },
            { time: "02:00" },
            { time: "03:00" },
            { time: "04:00" },
            { time: "05:00" },
            { time: "06:00" },
            { time: "07:00" },
            { time: "08:00" },
            { time: "09:00" },
            { time: "10:00" },
            { time: "11:00" },
            { time: "12:00" },
            { time: "13:00" },
            { time: "14:00" },
            { time: "15:00" },
            { time: "16:00" },
            { time: "17:00" },
        ]
        let i = 0;

        const result = this.props.events.filter(
            (day) => day.startTime === dayEvents[i++].time
        );

        const events = [
            {events: result[0]},
            {events: result[1]},
            {events: result[2]},
        ]

        console.log(dayEvents);
        // console.log(events);
        

        for (let i = 0; i < dayEvents.length; i++) {
            Object.assign(dayEvents[i], events[i])
        }

        return (
            <>
                {dayEvents.map((day) => {
                    return (
                        <div
                            key={day.time}
                            className="calendar__day-sell"
                            onClick={this.addEventObj}
                        >
                            {/* <div className="event">event or nothing</div> */}
                        </div>
                    );
                })}
            </>
        );
    }
}

export default Days;
