import React, { Component } from "react";
import './delete-popup.scss'

class Popup extends Component {
    render() {
        const id = this.props.id;
        const handleEventDelete = this.props.handleEventDelete;
        return (
            <div
                // className={`popup${this.props.showBox ? " show" : ""}`}
                className="popup show"
            >
                <i className="material-icons trash">delete</i>
                <button
                    className="delete-event-btn"
                    onClick={() => handleEventDelete(id)}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Popup;
