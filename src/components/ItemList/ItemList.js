import React, {Component} from 'react';
import './ItemList.css';

import GotService from '../../Service/GotService';
import Loader from '../UI/Loader/Loader';


export default class ItemList extends Component {
gotService = new GotService();


 state = {
     charList: null
 }
  
    
   componentDidMount() {
     this.updateCharacters();  
   }

    updateCharacters =() => {
         this.gotService.getAllCharacters()
          .then(charList => this.setState({charList}))
    }

    renderCharacters(arr) {

          return arr.map((item,index) => {
            return(
                <li key = {item.id} 
                    className="list-group-item"
                    onClick = {() => this.props.selectedHandleChar(item.id)}
                    >
                    {item.name}
                    
                </li>
            );
        })
    }
     

    render() {
     const {charList} = this.state;
      if (!charList) {
          return <Loader/>
      }

     
     const characters = this.renderCharacters(charList);
        return (
            <ul className="item-list list-group">
             {characters} 
            </ul>
        );
    }
}