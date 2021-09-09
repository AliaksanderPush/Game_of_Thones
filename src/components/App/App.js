import React  from 'react';
import {Col, Row, Container} from 'reactstrap';

import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import ItemList from '../ItemList/ItemList';
import CharsDetails from '../CharsDetails/CharsDetails';
import Button from '../UI/Button/Button';
import GotService from '../../Service/GotService';



export default class App extends React.Component {

    state = {
        show: false,
        selectedChar: null
    }
   

   togleHandleCharacter = () => {
      this.setState({show: !this.state.show})
  }

    selectedHandleChar = id => {
      this.setState({selectedChar: id})
  }
 
  render() {

    const {show, selectedChar} = this.state;
    console.log(this.state.selectedChar)
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    {show ? <RandomChar/>: null}                 
                        
                        <Button
                        onClick = {this.togleHandleCharacter}
                        >Togle random character</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList
                        selectedHandleChar = {this.selectedHandleChar}
                         />
                    </Col>
                    <Col md='6'>
                        <CharsDetails
                        charId = {selectedChar}
                         />
                    </Col>
                </Row>
            </Container>
        </>
    );
  }
};


