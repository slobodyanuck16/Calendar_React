import React, { Component } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import Modal from "./Modal";
import Popup from "./Popup";
import { getStartOfWeek } from "./Utils";

class App extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                monday: getStartOfWeek(new Date()),
                events: [
                    {
                        title: "testevent1",
                        date: "2020-05-18",
                        startTime: "00:00",
                        endTime: "00:30",
                        description: "213414",
                    },
                    {
                        title: "testevent2",
                        date: "2020-05-19",
                        startTime: "01:00",
                        endTime: "01:30",
                        description: "213414",
                    },
                    {
                        title: "testevent3",
                        date: "2020-05-20",
                        startTime: "03:00",
                        endTime: "03:30",
                        description: "213414",
                    },
                    {
                        title: "testevent3",
                        date: "2020-05-11",
                        startTime: "23:00",
                        endTime: "23:30",
                        description: "213414",
                    },
                ],
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
                    getCurrentWeek={this.getCurrentWeek}
                    monday={this.state.monday}
                    events={this.state.events}
                />
                <Modal events={this.state.events} />
                {/* <Popup /> */}
            </div>
        );
    }
}

export default App;
