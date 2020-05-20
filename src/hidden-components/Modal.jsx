import React, { Component } from "react";
import "materialize-css";
import { createEvent } from "../functions-and-gateway/eventsGateway";

class Modal extends Component {
    createEventObj = (e) => {
        e.preventDefault();
        const formData = [...new FormData(this.formRef)].reduce(
            (acc, [name, value]) => ({ ...acc, [name]: value }),
            {}
        );

        createEvent(formData).then(this.props.fetchEvents());
        this.props.fetchEvents();
        this.hidePopup()
    };

    hidePopup = () => {
        const hidden = document.getElementById("needToRemove");
        hidden.classList.add("hidden");
    };

    setRef = (node) => {
        this.formRef = node;
    };

    render() {
        return (
            <div className="modal hidden overlay" id="needToRemove">
                <div className="modal__content">
                    <div className="modal__content-icons">
                        <i className="small material-icons modal__content-clock">
                            access_time
                        </i>
                        <i className="small material-icons modal__content-list">
                            playlist_add
                        </i>
                    </div>
                    <div className="create-event">
                        <form
                            className="event-form"
                            onSubmit={this.createEventObj}
                            ref={this.setRef}
                        >
                            <button
                                className="create-event__close-btn"
                                onClick={this.hidePopup}
                            >
                                +
                            </button>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="event-form__title"
                            />
                            <div className="event-form__time">
                                <input
                                    type="date"
                                    name="date"
                                    className="event-form__time-date"
                                />
                                <input
                                    type="time"
                                    name="startTime"
                                    className="event-form__time-start"
                                />
                                <span>-</span>
                                <input
                                    type="time"
                                    name="endTime"
                                    className="event-form__time-end"
                                />
                            </div>
                            <textarea
                                name="description"
                                placeholder="Description"
                                className="event-form__description"
                            ></textarea>
                            <button
                                type="submit"
                                className="event-form__submit-btn"
                                // onClick={this.hidePopup}
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
