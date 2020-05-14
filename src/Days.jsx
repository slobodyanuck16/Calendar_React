import React, { Component } from "react";
import { object } from "prop-types";

class Days extends Component {
    addEventObj = (e) => {
        console.log(e.target);
    };

    render() {
        const dayEvents = [
            { time: "02:00" },
            { time: "01:00" },
            { time: "03:00" },
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
        

        for (let i = 0; i <= dayEvents.length; i++) {
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
