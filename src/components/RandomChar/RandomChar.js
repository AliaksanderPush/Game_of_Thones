import React, {Component} from 'react';

import GotService from '../../Service/GotService';
import './RandomChar.css';
import Loader from '../UI/Loader/Loader';
import Error from '../UI/Error/Error';

export default class RandomChar extends Component {

 gotService = new GotService();
 state = {
   char: {},
   loading: true,
   errorMessage: false,
   show: false
 }
    
    componentDidMount() {
       this.updateCharacter();
       this.timeInt = setInterval(this.updateCharacter, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInt);
    }

       
    onCharLoaded = char => this.setState({char,loading:false});

    onError = () => {
        this.setState({
           errorMessage: true,
           loading:false
        })
    }

    updateCharacter =() => {
        const id = Math.floor(Math.random() * (140 + 25));
        this.gotService.getCharacters(id)
          .then(this.onCharLoaded)
          .catch(this.onError)
      
    }

    render() {
        const {char, loading, errorMessage} = this.state;
        const load = loading? <Loader/>: null;
        const err = errorMessage? <Error/>:null;
        const content = !(loading || errorMessage)? <View char = {char} />:null;
          return (
              <div className="random-block rounded">
             {load}
             {err}
             {content}
              </div>
            
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return(
     <>
      <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender.length === 0 ? 'no data available': gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born.length === 0 ? 'no data available': born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died.length === 0 ? 'no data available': died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture.length === 0 ? 'no data available': culture}</span>
            </li>
        </ul>
     </>
   );
}