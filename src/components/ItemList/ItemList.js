import React, {Component} from 'react';
import './ItemList.css';


import Loader from '../UI/Loader/Loader';


export default class ItemList extends Component {

 state = {
     itemList: null
 }
   
   componentDidMount() {
     this.updateCharacters();  
   }

    updateCharacters =() => {
        const {getData} = this.props;

             getData()
          .then(itemList => this.setState({itemList}))
    }

    renderCharacters(arr) {

          return arr.map(item => {
              const {id} = item;
              const label = this.props.renderItem(item);
            return(
                <li key = {id} 
                    className="list-group-item"
                    onClick = {() => this.props.selectedHandleItem(id)}
                    >
                    {label}
                    
                </li>
            );
        })
    }
     

    render() {
     const {itemList} = this.state;
      if (!itemList) {
          return <Loader/>
      }

     
     const characters = this.renderCharacters(itemList);
        return (
            <ul className="item-list list-group">
             {characters} 
            </ul>
        );
    }
}