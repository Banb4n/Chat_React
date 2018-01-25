import React from 'react';

class Message extends React.Component {
    preRender = (isUser) => {
        if (isUser) {
            return (
                <p className="user-message">{this.props.content.message}</p>
            )
        } else {
            return (
                <p className="not-user-message">
                    <strong>{this.props.content.pseudo}</strong> : 
                    <span> {this.props.content.message}</span>
                </p>
            )
        }
    }; 

    render() {
        return this.preRender(this.props.isUser(this.props.content.pseudo));
    }

    static propTypes = {
        content: React.PropTypes.object.isRequired,
    };
}

export default Message;