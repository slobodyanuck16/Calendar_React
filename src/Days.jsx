import React, { Component } from "react";

class Days extends Component {
    state = {
        days: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    };

    render() {
        const days = this.state.days.slice();
        
        return (
            <>
                {days.map((day) => {
                    return <div key={day} className="calendar__day-sell"></div>;
                })}
            </>
        );
    }
}

export default Days;
