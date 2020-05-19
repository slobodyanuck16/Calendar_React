import React, { Component } from "react";
import moment from "moment";
import { generateNumbersRange } from "./Utils";
import Popup from "./Popup";

class Day extends Component {
    state = {
        showBox: false,
    };

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
                            eventObj.startTime.substr(0, 2) === `0${num}`
                    ),
                };
            } else
                return {
                    hours: `${num}:00`,
                    events: filterEvents.filter(
                        (eventObj) =>
                            eventObj.startTime.substr(0, 2) === num + ""
                    ),
                };
        });

        return hoursArray;
    };

    showDeleteBtn = () => {
        this.setState({ showBox: !this.state.showBox });
    };
    hideDeleteBtn = () => {
        this.setState({ showBox: !this.state.showBox });
    };

    showRedLine = () => {
        if (
            moment(this.props.day).format("YYYY-MM-DD") ===
            moment(this.props.redLine).format("YYYY-MM-DD")
        ) {
            setInterval(() => {
                this.setState({
                    redLine: (this.props.redLine = new Date()),
                });
                return <div className="red-line"></div>;
            }, 1000);
        } else {
            return;
        }
    };

    render() {
        const fullArray = this.getHoursArray(this.props.events, this.props.day);

        // если this.props.day совпадает с датой redLine датой, то отображать див с таймаутом в минуту, или же ничего не отображать
        // у линии будет начальное абсолют положение, она будет смещаться в низ на 1 пиксель каждую минуту, 
        // если она достигнет определенного количества пикселей вниз, то счетчик сбрасывается
        // или же располошаться относительно new date() и смещаться так же в низ


        return (
            <>
                <div className="calendar__day-sell empty"></div>
                <div className="red-line">
                    {this.showRedLine}
                    <div className="red-circle"></div>
                </div>
                {fullArray.map((day) => {
                    return (
                        <div
                            key={`${day}` + `${day.hours}`}
                            className="calendar__day-sell"
                        >
                            {day.events.map((event) => {
                                return (
                                    <div
                                        key={event.title}
                                        className="event"
                                        onMouseEnter={this.showDeleteBtn}
                                        onMouseOut={this.hideDeleteBtn}
                                    >
                                        {`${event.title} 
                                 ${event.startTime} ${event.endTime}`}
                                        <Popup showBox={this.state.showBox} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </>
        );
    }
}

export default Day;
