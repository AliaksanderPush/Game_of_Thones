import React, {Component} from 'react';
import './ItemDetails.css';




export default class ItemDetails extends Component {
 
 state = {
   item: null
   
 }

    componentDidMount() {
        this.updateChar();
    }
    
    componentDidUpdate(prevProps) {
       if (this.props.itemId !== prevProps.itemId) {
         this.updateChar(); 
       }
    }

    updateChar =() => {
       const {itemId} = this.props;
        if (!itemId) {
            return;
        }

         const {getData} = this.props; 
         let id = itemId;
             getData(id)
            .then(item => {
              this.setState({item})   
            })
      
    }


    render() {
          if (!this.state.item) {
           return <span className="select-error">Please select a character</span>
        }
    
         const {item} = this.state;
         const {children} = this.props;
         const {name} = item;

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                   {
                     React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                     }) 
                   }
                </ul>
            </div>
        );
    }
}