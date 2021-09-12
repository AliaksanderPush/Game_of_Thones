import React  from 'react';
import {Col, Row, Container} from 'reactstrap';

import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import Button from '../UI/Button/Button';
import GotService from '../../Service/GotService';
import Error from '../UI/Error/Error';
import CharacterPage from '../CharacterPage/CharacterPage';



export default class App extends React.Component {

    state = {
        show: false,
        error: false
    }
   componentDidCatch() {
       this.setState({
           error: true
       })
   }


   togleHandleCharacter = () => {
      this.setState({show: !this.state.show})
  }

    showDataAvailable = data => {
        if (data.length === 0 ) {
            return "no data available"
        } else {
            return data
        }
    }
   
 
  render() {
    const {show, error} = this.state;
    const {showDataAvailable, togleHandleCharacter} = this;
    if (error) {
        return <Error/>
    }
    
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    {show 
                    ? <RandomChar
                     showDataAvailable = {showDataAvailable}
                    />
                    : null
                    }                 
                      
                        <Button
                        onClick = {togleHandleCharacter}
                        >Togle random character</Button>
                    </Col>
                </Row>
                <CharacterPage      
                />
            </Container>
        </>
    );
  }
};


