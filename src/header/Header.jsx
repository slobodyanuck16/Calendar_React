import React, { Component } from "react";
import { getDisplayedMonth } from "../functions-and-gateway/Utils";
import './header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    createEvent = () => {
        const hidden = document.getElementById("needToRemove");
        hidden.classList.remove("hidden");
    }

    onCreateNewEventHandndler = () => {
        this.props.toggleModalVisibility();
    }

    render() {
        const onWeekForward = this.props.onWeekForward;
        const onWeekBack = this.props.onWeekBack;
        const getCurrentWeek = this.props.getCurrentWeek;
        const thisMonth = getDisplayedMonth(this.props.monday);

        return (
            <header className="header"
            onScroll={this.stickHeaderOnScroll}>
                <button className="header__element button create-event-btn" onClick={this.onCreateNewEventHandndler}>
                <i className="small material-icons create-event-btn__icon">add</i>Create
                </button>
                <div className="header__element navigation">
                    <button
                        className="navigation__today-btn button"
                        onClick={getCurrentWeek}
                    >
                        Today
                    </button>
                    <button
                        className="icon-button navigation__nav-icon"
                        onClick={onWeekBack}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        className="icon-button navigation__nav-icon"
                        onClick={onWeekForward}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <span className="header__element navigation__displayed-month">
                        {thisMonth}
                    </span>
                </div>
            </header>
        );
    }
}

export default Header;
