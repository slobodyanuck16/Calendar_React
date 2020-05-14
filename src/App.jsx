import React, { Component } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import Modal from "./Modal";
import Popup from "./Popup";
import { getStartOfWeek, generateWeekRange } from "./Utils";
import moment from "moment";

class App extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                monday: getStartOfWeek(new Date()),
                days: [
                    { time: 0, events: [] },
                    { time: 1, events: [] },
                    { time: 2, events: [] },
                    { time: 3, events: [] },
                    { time: 4, events: [] },
                    { time: 5, events: [] },
                    { time: 6, events: [] },
                    { time: 7, events: [] },
                    { time: 8, events: [] },
                    { time: 9, events: [] },
                    { time: 10, events: [] },
                    { time: 11, events: [] },
                    { time: 12, events: [] },
                    { time: 13, events: [] },
                    { time: 14, events: [] },
                    { time: 15, events: [] },
                    { time: 16, events: [] },
                    { time: 17, events: [] },
                    { time: 18, events: [] },
                    { time: 19, events: [] },
                    { time: 20, events: [] },
                    { time: 21, events: [] },
                    { time: 22, events: [] },
                    { time: 23, events: [] },
                    { time: "empty", events: [] },
                 ]
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
    }

    getCurrentWeek = () => {
        const monday = getStartOfWeek(new Date());

        this.setState({
            monday: monday,
        });
    };

    render() {
        return (
            <div className="page">
                <Header
                    onWeekForward={this.onWeekForward}
                    onWeekBack={this.onWeekBack}
                    getCurrentWeek={this.getCurrentWeek}
                    monday={this.state.monday}
                />
                <Calendar
                    onWeekForward={this.onWeekForward}
                    onWeekBack={this.onWeekBack}
                    getWeek={this.getWeek}
                    monday={this.state.monday}
                    days={this.state.days}
                />
                <Modal days={this.state.days}/>
                <Popup />
            </div>
        );
    }
}

export default App;
