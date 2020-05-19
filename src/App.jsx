import React, { Component } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import Modal from "./Modal";
import { getStartOfWeek } from "./Utils";

class App extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                monday: getStartOfWeek(new Date()),
                events: [
                    {
                        date: "2020-05-19",
                        description: "sadasdsad",
                        endTime: "03:00",
                        startTime: "01:00",
                        title: "asdsadsad",
                    },
                    {
                        date: "2020-05-21",
                        description: "sadasdsad",
                        endTime: "03:00",
                        startTime: "02:00",
                        title: "asdsadsad",
                    },
                    {
                        date: "2020-05-23",
                        description: "sadasdsad",
                        endTime: "03:00",
                        startTime: "03:00",
                        title: "asdsadsad",
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
        // this.timerID = setInterval(() => this.tick(), 1000);
    }

    getCurrentWeek = () => {
        const monday = getStartOfWeek(new Date());

        this.setState({
            monday: monday,
        });
    };
    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    // tick = () => {
    //     this.setState({
    //         date: new Date(),
    //     });
    // };

    render() {
        return (
            <div className="page">
                <Modal events={this.state.events} />
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
            </div>
        );
    }
}

export default App;
