import React, {Component}  from 'react';
import './HousesPage';

import GotService from '../../Service/GotService';
import ItemList from '../ItemList/ItemList';

export default class HousesPage extends Component {
   gotService = new GotService();
 render() {
     // const {selectedChar, error} = this.state;
      const {selectedHandleItem} = this;

    return (

     <ItemList
            selectedHandleItem = {selectedHandleItem}
            getData = {this.gotService.getAllHouses}
            renderItem = { item => `${item.name}` }
         />
     


    );
 }

}
