import React, { Component } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import Modal from "./Modal";
import Popup from "./Popup";


class App extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <Calendar />
                <Modal />
                <Popup />
            </div>
        );
    }
}

export default App;