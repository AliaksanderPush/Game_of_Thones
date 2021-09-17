import React, {Component}  from 'react';

import GotService from '../../Service/GotService';
import ItemList from '../ItemList/ItemList';
import Error from '../UI/Error/Error';
import { withRouter } from 'react-router';


 class BooksPage extends Component {
  gotService = new GotService();
 
  state = {
      error: false
      }
  

   componentDidCatch() {
       this.setState({
           error: true
       })
   }

         
 render() {
   const {error} = this.state;
        if (error) {
        return <Error/>
      }

     return (
      <ItemList
              selectedHandleItem = {(itemId) => {
                 this.props.history.push(itemId)
              }}
              getData = {this.gotService.getAllBooks}
              renderItem = {item => `${item.name}` }
          />
    );
 }

}
export default withRouter(BooksPage);