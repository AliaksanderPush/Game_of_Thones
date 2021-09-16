import React, {Component}  from 'react';

import GotService from '../../Service/GotService';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import Error from '../UI/Error/Error';
import RowBlock from '../RowBlock/RowBlock';
import Field from '../Field/Field';

export default class BooksPage extends Component {
  gotService = new GotService();
 
  state = {
      selectedBook: null,
      error: false
      }
  

   componentDidCatch() {
       this.setState({
           error: true
       })
   }
    
  
   selectedHandleItem = id => {
      this.setState({selectedBook: id})
   }

       
 render() {
   const {selectedBook, error} = this.state;
   const {selectedHandleItem} = this;
      if (error) {
        return <Error/>
      }

       const itemList = (
          <ItemList
              selectedHandleItem = {selectedHandleItem}
              getData = {this.gotService.getAllBooks}
              renderItem = {item => `${item.name}` }
          />
        )

        const itemDetails = (
          <ItemDetails
            itemId = {this.state.selectedBook}
            getData = {this.gotService.getBooks}
          >
            <Field field = 'numberOfPages' label = 'Number of Pages'/>            
            <Field field = 'publisher' label = 'Publisher'/> 
            <Field field = 'released' label = 'Released'/> 
         </ItemDetails>
      )
      

    return (
       <RowBlock  left = {itemList} rigth = {itemDetails}/>
    );
 }

}