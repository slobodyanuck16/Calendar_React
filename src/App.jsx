import React, { Component } from "react";
import Header from "./header/Header";
import Calendar from "./calendar/Calendar";
import Modal from "./hidden-components/Modal";
import { getStartOfWeek } from "./functions-and-gateway/Utils";
import { fetchEventsList, deleteEvent } from "./functions-and-gateway/eventsGateway";

class App extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                monday: getStartOfWeek(new Date()),
                events: [],
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
        // setInterval(() => {
        //     this.fetchEvents();
        // }, 1000);
        this.fetchEvents();
    }

    getCurrentWeek = () => {
        const monday = getStartOfWeek(new Date());

        this.setState({
            monday: monday,
        });
    };

    fetchEvents = () => {
        fetchEventsList().then((eventsList) => {
            this.setState({
                events: eventsList,
            });
        });
    };

    handleEventDelete = (id) => {
        deleteEvent(id).then(() => this.fetchEvents());
    };

    render() {
        return (
            <div className="page">
                <Modal
                    events={this.state.events}
                    fetchEvents={this.fetchEvents}
                />
                <Header
                    onWeekForward={this.onWeekForward}
                    onWeekBack={this.onWeekBack}
                    getCurrentWeek={this.getCurrentWeek}
                    monday={this.state.monday}
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
