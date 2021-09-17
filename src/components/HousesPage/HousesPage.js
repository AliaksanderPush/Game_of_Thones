import React, {Component}  from 'react';

import GotService from '../../Service/GotService';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import Error from '../UI/Error/Error';
import RowBlock from '../RowBlock/RowBlock';
import Field from '../Field/Field';


export default class HousesPage extends Component {
  gotService = new GotService();
 
  state = {
      selectedHouses: null,
      error: false
      }
  

   componentDidCatch() {
       this.setState({
           error: true
       })
   }
    
  
   selectedHandleItem = id => {
      this.setState({selectedHouses: id})
   }

       
 render() {
   const {error} = this.state;
   const {selectedHandleItem} = this;
      if (error) {
        return <Error/>
      }

       const itemList = (
          <ItemList
              selectedHandleItem = {selectedHandleItem}
              getData = {this.gotService.getAllHouses}
              renderItem = {item => `${item.name}` }
          />
        )

        const itemDetails = (
          <ItemDetails
            itemId = {this.state.selectedHouses}
            getData = {this.gotService.getHouses}
          >
            <Field field = 'region' label = 'Region'/>            
            <Field field = 'words' label = 'Words'/> 
            <Field field = 'titles' label = 'Titles'/> 
            <Field field = 'overlord' label = 'Overlord'/> 
          </ItemDetails>
      )
      

    return (
       <RowBlock  left = {itemList} rigth = {itemDetails}/>
    );
 }

}
