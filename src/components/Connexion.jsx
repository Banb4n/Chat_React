import React from 'react';

class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        const pseudoUser = this.pseudoInput.value;
        this.context.router.transitionTo(`/pseudo/${pseudoUser}`)
    };

    render() {
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={(e) => this.goToChat(e)}>
                    <input 
                        type="text" 
                        placeholder="Votre pseudo" 
                        required 
                        ref={(input) => {this.pseudoInput = input}}/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
    
    static contextTypes = {
        router: React.PropTypes.object,
    }
}



export default Connexion;