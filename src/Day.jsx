import React, { Component } from "react";
import moment from "moment";

class Day extends Component {
    getHours = (event, dayDate) => {
        const formatDate = moment(dayDate).format("YYYY-MM-DD");
        const filterEvents = event.filter(
            (eventObj) => eventObj.date === formatDate
        );

        let day = [
            {
                hour: "00:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "00"
                ),
            },
            {
                hour: "01:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "01"
                ),
            },
            {
                hour: "02:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "02"
                ),
            },
            {
                hour: "03:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "03"
                ),
            },
            {
                hour: "04:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "04"
                ),
            },
            {
                hour: "05:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "05"
                ),
            },
            {
                hour: "06:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "06"
                ),
            },
            {
                hour: "07:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "07"
                ),
            },
            {
                hour: "08:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "08"
                ),
            },
            {
                hour: "09:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "09"
                ),
            },
            {
                hour: "10:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "10"
                ),
            },
            {
                hour: "11:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "11"
                ),
            },
            {
                hour: "12:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "12"
                ),
            },
            {
                hour: "13:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "13"
                ),
            },
            {
                hour: "14:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "14"
                ),
            },
            {
                hour: "15:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "15"
                ),
            },
            {
                hour: "16:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "16"
                ),
            },
            {
                hour: "17:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "17"
                ),
            },
            {
                hour: "18:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "18"
                ),
            },
            {
                hour: "19:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "19"
                ),
            },
            {
                hour: "20:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "20"
                ),
            },
            {
                hour: "21:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "21"
                ),
            },
            {
                hour: "22:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "22"
                ),
            },
            {
                hour: "23:00",
                event: filterEvents.filter(
                    (eventObj) => eventObj.startTime.substr(0, 2) === "23"
                ),
            },
        ];

        return day;
    };

    render() {
        const fullArray = this.getHours(this.props.events, this.props.day);
        return (
            <>
                {fullArray.map((day) => {
                    return (
                        <div key={day.hour} className="calendar__day-sell">
                            <div className="calendar__day-sell"></div>
                            {day.event.map((event) => {
                                return (
                                    <div className="event">{`${event.title} 
                                 ${event.startTime} ${event.endTime}`}</div>
                                );
                            })}
                        </div>
                    );
                })}
                <Popup />
            </>
        );
    }
}

export default Day;
