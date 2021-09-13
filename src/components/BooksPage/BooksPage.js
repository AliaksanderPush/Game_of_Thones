import React, {Component}  from 'react';
import './BooksPage';

import GotService from '../../Service/GotService';
import ItemList from '../ItemList/ItemList';

export default class BooksPage extends Component {
  gotService = new GotService();
 
       
 render() {
     // const {selectedChar, error} = this.state;
      const {selectedHandleItem} = this;

    return (

     <ItemList
            selectedHandleItem = {selectedHandleItem}
            getData = {this.gotService.getAllBooks}
            renderItem = { item => `${item.name}` }
         />
    



    );
 }

}