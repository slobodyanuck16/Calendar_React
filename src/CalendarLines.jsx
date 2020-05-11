import React, { Component } from "react";

class CalendarLines extends Component {
    state = {
        lines: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
    };

    render() {
        const hoursSells = this.state.lines.slice();
        return (
            <div className="calendar__lines">
                {hoursSells.map((line) => {
                    return (
                        <div key={line} className="calendar__lines-semi"></div>
                    );
                })}
            </div>
        );
    }
}

export default CalendarLines;
