import React, { Component } from "react";
import moment from "moment";
import { generateNumbersRange } from "./Utils";

class Day extends Component {
    getHoursArray = (event, dayDate) => {
        const formatDate = moment(dayDate).format("YYYY-MM-DD");
        const filterEvents = event.filter(
            (eventObj) => eventObj.date === formatDate
        );
        const hoursArray = generateNumbersRange(0, 23).map((num) => {
            if (num - 10 < 0) {
                return {
                    hours: `0${num}:00`,
                    events: filterEvents.filter(
                        (eventObj) =>
                            eventObj.startTime.substr(1, 1) === (num + "")
                    ),
                };
            } else
                return {
                    hours: `${num}:00`,
                    events: filterEvents.filter(
                        (eventObj) =>
                            eventObj.startTime.substr(0, 2) === (num + "")
                    ),
                };
        });
        return hoursArray;
    };

    render() {
        const fullArray = this.getHoursArray(this.props.events, this.props.day);
        console.log(fullArray);
        
        return (
            <>
                {fullArray.map((day) => {
                    return (
                        <div key={day.hour} className="calendar__day-sell">
                            <div className="calendar__day-sell"></div>
                            {day.events.map((event) => {
                                return (
                                    <div className="event">{`${event.title} 
                                 ${event.startTime} ${event.endTime}`}</div>
                                );
                            })}
                        </div>
                    );
                })}
                {/* <Popup /> */}
            </>
        );
    }
}

export default Day;
