import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';

import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import Error from '../UI/Error/Error';
import GotService from '../../Service/GotService';
import RowBlock from '../RowBlock/RowBlock';
import Field from '../Field/Field';

 



export default class CharacterPage extends Component {
  gotService = new GotService();
   state = {
      selectedChar: null,
      error: false
      }
  

   componentDidCatch() {
       this.setState({
           error: true
       })
   }
 

   selectedHandleItem = id => {
      this.setState({selectedChar: id})
   }

   render() {
      const {selectedChar, error} = this.state;
      const {selectedHandleItem} = this;

      if (error) {
         return <Error/>
      }
      
      const itemList = (
        <ItemList
            selectedHandleItem = {selectedHandleItem}
            getData = {this.gotService.getAllCharacters}
            renderItem = { item => `${item.name} (${item.gender})` }
         />
      )
     
      const itemDetails = (
          <ItemDetails
            itemId = {selectedChar}
            getData = {this.gotService.getCharacters}
          >
            <Field field = 'gender' label = 'Gender'/>            
            <Field field = 'born' label = 'Born'/> 
            <Field field = 'died' label = 'Died'/> 
            <Field field = 'culture' label = 'Culture'/> 
         </ItemDetails>
      )

      return(
        <RowBlock  left = {itemList} rigth = {itemDetails}/>
      );
   }
}