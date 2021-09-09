import React, {Component} from 'react';
import './CharsDetails.css';

import GotService from '../../Service/GotService';

export default class CharsDetails extends Component {
 gotService = new GotService();
 state = {
   char: {},
   loading: true,
   errorMessage: false,
 }

    componentDidMount() {
        this.updateChar();
    }
    
    componentDidUpdate(prevProps) {
       if (this.props.charId !== prevProps.charId) {
         this.updateChar(); 
       }
    }

    updateChar =() => {
       const {charId} = this.props;
        if (!charId) {
            return;
        }

         let id = charId;
         this.gotService.getCharacters(id)
            .then(char => {
              this.setState({char})   
            })
            .catch(this.onError)
        
    }




    render() {
       console.log(this.props.charId);
        if (!this.state.char) {
            return <span className="select-error">Please select a character</span>
        }
      const {name, gender, born, died, culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}