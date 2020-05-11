import React, { Component } from "react";

class Calendar extends Component {
    render() {
        return (
            <div className="modal hidden overlay">
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
                        <form className="event-form">
                            <button className="create-event__close-btn">
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

export default Calendar;
