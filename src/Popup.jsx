import React, { Component } from "react";

class Popup extends Component {
    render() {
        return (
            <div className="popup hidden overlay">
                <div className="popup__overlay"></div>
                <div className="popup__content">
                    <button className="delete-event-btn">Delete</button>
                </div>
            </div>
        );
    }
}

export default Popup;
