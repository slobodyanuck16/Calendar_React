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
            "",
        ],
    };

    render() {
        const hoursSells = this.state.lines.slice();
        return (
            <div className="calendar__lines">
                {hoursSells.map(() => {
                    return (
                        <div
                            key={Math.random()}
                            className="calendar__lines-semi"
                        ></div>
                    );
                })}
            </div>
        );
    }
}

export default CalendarLines;
