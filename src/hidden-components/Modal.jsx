import React, { Component } from "react";
import './modal.scss'

const defaultFormState = {
    title: "Add title of your event",
    date: "",
    startTime: "",
    endTime: "",
};

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: defaultFormState,
        };
    }

    createEventObj = (e) => {
        e.preventDefault();

        if (Object.values(this.state.form).some((el) => el === "")) {
            console.log("no values");
            return;
        }

        this.props.onAddNewEvent(this.state.form);
        this.clearForm(); // try to commit
        this.hidePopup();
    };

    hidePopup = () => {
        this.props.toggleModalVisibility();
    };

    inputHandler = (e) => {
        const { name, value } = e.target;

        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            },
        });
    };

    clearForm = () => {
        this.setState({
            form: defaultFormState,
        });
    };

    render() {
        return (
            <div className="modal">
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
                        >
                            <button
                                className="create-event__close-btn"
                                onClick={this.hidePopup}
                            >
                                <i className="small material-icons">close</i>
                            </button>
                            <input
                                onChange={this.inputHandler}
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="event-form__title"
                            />
                            <div className="event-form__time">
                                <input
                                    onChange={this.inputHandler}
                                    type="date"
                                    name="date"
                                    className="event-form__time-date alltime"
                                />
                                <input
                                    onChange={this.inputHandler}
                                    type="time"
                                    name="startTime"
                                    className="event-form__time-start"
                                />
                                <span>-</span>
                                <input
                                    onChange={this.inputHandler}
                                    type="time"
                                    name="endTime"
                                    className="event-form__time-end"
                                />
                            </div>
                            <textarea
                                onChange={this.inputHandler}
                                name="description"
                                placeholder="Description"
                                className="event-form__description"
                            ></textarea>
                            <button
                                type="submit"
                                className="event-form__submit-btn"
                            >
                                <a className="waves-effect waves-light btn">Save</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
