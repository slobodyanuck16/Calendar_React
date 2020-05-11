import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <button className="header__element button create-event-btn">
                    <i className="fas fa-plus create-event-btn__icon"></i>Create
                </button>
                <div className="header__element navigation">
                    <button className="navigation__today-btn button">
                        Today
                    </button>
                    <button className="icon-button navigation__nav-icon">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="icon-button navigation__nav-icon">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <span className="header__element navigation__displayed-month">displayed month and year</span>
                </div>
            </header>
        );
    }
}

export default Header;
