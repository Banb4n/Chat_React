import React from 'react';

class Formulaire extends React.Component {

    state = {
        length: this.props.length,
    }

    createMessage = event => {
        event.preventDefault();
        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo,
        };

        console.log(message);
        this.props.addMessage(message);

        //Reset 
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({ length });
    }

    counter = event => {
        const length = this.props.length - this.message.value.length;
        this.setState({ length });
    }

    render() {
        return (
            <form 
                className="form" 
                onSubmit={e => this.createMessage(e)}
                ref={input => this.messageForm = input}
            >
                <textarea 
                    maxLength={this.props.length}
                    ref={input => this.message = input}
                    onChange={e => this.counter(e)}
                >
                </textarea>
                <div className="info">{this.state.length}</div>
                <button type="submit">Envoyer !</button>
            </form>
        )
    };

    static propTypes = {
        addMessage: React.PropTypes.func.isRequired,
        pseudo: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired,
    };
}

export default Formulaire;