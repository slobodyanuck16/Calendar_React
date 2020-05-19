import React, { Component } from "react";

class Popup extends Component {
    deleteEvent = (e) => {
        console.log(e.target.value);
    };
    render() {
        return (
            <div
                className={`popup${this.props.showBox ? " show" : ""}`}
            >
                <i className="material-icons trash">delete</i>
                <button className="delete-event-btn" onClick={this.deleteEvent}>
                    Delete
                </button>
            </div>
        );
    }
}

export default Popup;
