import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    showContent = () => 
        this.setState({
            isOpen: !this.state.isOpen,
        });

    render() {
        const button = this.state.isOpen ? 
            (<i className="fas fa-arrow-up"></i>) :
            (<i className="fas fa-arrow-down"></i>);
        const content = this.state.isOpen &&    
            (<div className="expand__content">
                {this.props.children}
            </div>);

        return(
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">
                        {this.props.title}
                    </span>
                    <button className="expand__toggle-btn"
                        onClick={this.showContent}>
                            {button}
                    </button>
                </div>
                {content}
            </div>
        );
    }
}

Expand.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
    title: 'Some title',
};

export default Expand;