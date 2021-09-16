import React, {Component} from 'react';
import Field from '../../Field/Field';
import ItemDetails from '../../ItemDetails/ItemDetails';
import GotService from '../../../Service/GotService';

export default class BooksItem extends Component {
   gotService = new GotService();
   
   render() {
      
      return (
          <ItemDetails
            itemId = {this.props.itemId}
            getData = {this.gotService.getBooks}
          >
            <Field field = 'numberOfPages' label = 'Number of Pages'/>            
            <Field field = 'publisher' label = 'Publisher'/> 
            <Field field = 'released' label = 'Released'/> 
         </ItemDetails>
      );
   }
} 