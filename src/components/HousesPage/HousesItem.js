import React, {Component} from 'react';
import Field from '../Field/Field';
import ItemDetails from '../ItemDetails/ItemDetails';
import GotService from '../../Service/GotService';

export default class HousesItem extends Component {
   gotService = new GotService();
   
   render() {
      
      return (
          <ItemDetails
            itemId = {this.props.itemId}
            getData = {this.gotService.getHouses}
          >
            <Field field = 'region' label = 'Region'/>            
            <Field field = 'words' label = 'Words'/> 
            <Field field = 'titles' label = 'Titles'/> 
            <Field field = 'overlord' label = 'Overlord'/> 
          </ItemDetails>
      );
   }
} 