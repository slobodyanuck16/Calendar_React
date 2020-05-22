import React, { Component } from "react";
import Header from "./header/Header";
import Calendar from "./calendar/Calendar";
import Modal from "./hidden-components/Modal";
import { getStartOfWeek } from "./functions-and-gateway/Utils";
import {
    fetchEventsList,
    deleteEvent,
    createEvent,
} from "./functions-and-gateway/eventsGateway";

class App extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                monday: getStartOfWeek(new Date()),
                events: [],
                isModalVisible: false,
            });
    }

    onWeekForward = () => {
        const currentMonday = this.state.monday;
        const futureMonday = new Date(
            currentMonday.setDate(currentMonday.getDate() + 7)
        );

        this.setState({
            monday: futureMonday,
        });
    };

    toggleModalVisibility = () => {
        this.setState((prevState) => {
            return {
                isModalVisible: !prevState.isModalVisible,
            };
        });
    };

    onWeekBack = () => {
        const currentMonday = this.state.monday;
        const pastMonday = new Date(
            currentMonday.setDate(currentMonday.getDate() - 7)
        );

        this.setState({
            monday: pastMonday,
        });
    };

    componentDidMount() {
        this.getCurrentWeek();
        this.fetchEvents();
    }

    getCurrentWeek = () => {
        const curMonday = getStartOfWeek(new Date());

        this.setState({
            monday: curMonday,
        });
    };

    fetchEvents = () => {
        fetchEventsList().then((eventsList) => {
            this.setState({
                events: eventsList,
            });
        });
    };

    createNewEvent = async (newEventData) => {
        // this.setState({
        //     events: [...this.state.events, newEventData]
        // })
        const newCalendar = await createEvent(newEventData);
        this.fetchEvents();

        console.log("newCalendar:= ", newCalendar);
    };

    handleEventDelete = (id) => {
        deleteEvent(id).then(() => this.fetchEvents());
    };

    render() {
        return (
            <div className="page">
                {this.state.isModalVisible && (
                    <Modal
                        events={this.state.events}
                        fetchEvents={this.fetchEvents}
                        onAddNewEvent={this.createNewEvent}
                        toggleModalVisibility={this.toggleModalVisibility}
                    />
                )}
                <Header
                    onWeekForward={this.onWeekForward}
                    onWeekBack={this.onWeekBack}
                    getCurrentWeek={this.getCurrentWeek}
                    monday={this.state.monday}
                    toggleModalVisibility={this.toggleModalVisibility}
                />
                <Calendar
                    onWeekForward={this.onWeekForward}
                    onWeekBack={this.onWeekBack}
                    getCurrentWeek={this.getCurrentWeek}
                    monday={this.state.monday}
                    events={this.state.events}
                    handleEventDelete={this.handleEventDelete}
                />
            </div>
        );
    }
}

export default App;
