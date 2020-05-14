import React, { Component } from "react";
import 'materialize-css';

class Modal extends Component {
    createEventObj = (e) => {
        // Считываем форму
        // Создаем объект где данные инпута будут равны ключам объекта
        // Добавляем этот объект в массив дней, где указанная дата начала ивента, 
        //     тоесть час, будет равен или ключу time или индексу масива дней
            e.preventDefault();
            const formData = [...new FormData(this.formRef)].reduce(
                (acc, [name, value]) => ({ ...acc, [name]: value }),
                {},
            );
            this.setState({
                events: this.props.events.push(formData)
            })
    }

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
                        <form className="event-form" onSubmit={this.createEventObj} ref={this.setRef}>
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

export default Modal;
