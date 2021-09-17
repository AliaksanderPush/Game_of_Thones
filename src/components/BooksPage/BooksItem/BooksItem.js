import React, {Component} from 'react';
import Field from '../../Field/Field';
import ItemDetails from '../../ItemDetails/ItemDetails';
import GotService from '../../../Service/GotService';

export default class BooksItem extends Component {
   gotService = new GotService();
   
   render() {
      console.log(this.props.bookId);
      return (
         <>
          <h1>Hello</h1>
          <ItemDetails
            itemId = {this.props.bookId}
            getData = {this.gotService.getBooks}
          >
              <Field field = 'authors' label = 'Authors'/>
              <Field field = 'country' label = 'Country'/> 
              <Field field = 'publisher' label = 'Publisher'/> 
              <Field field = 'released' label = 'Released'/> 
              <Field field = 'numberOfPages' label = 'Number of Pages'/> 
         </ItemDetails>
         </>
      );
   }
} 