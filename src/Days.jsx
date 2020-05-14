import React, { Component } from "react";

class Days extends Component {
    
    addEventObj = (e) => {
        console.log(e.target);
    }

    render() {
        const days = this.props.days.slice();
        
        return (
            <>
                {days.map((day) => {
                    return <div key={day.time} className="calendar__day-sell"
                                           onClick={this.addEventObj}>
                            {/* <div className="event">event or nothing</div> */}
                            </div>;
                })}
            </>
        );
    }
}

export default Days;
