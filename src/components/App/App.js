import React  from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import Button from '../UI/Button/Button';
import Error from '../UI/Error/Error';
import CharacterPage from '../CharacterPage/CharacterPage';
import HousesPage from '../HousesPage/HousesPage';
import BooksPage from '../BooksPage/BooksPage';
import BooksItem from '../BooksPage/BooksItem/BooksItem';




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
                              
                 </Col>
                </Row>
                   <Button
                        onClick = {togleHandleCharacter}
                        >Togle random character</Button>             
                <Switch>
                    <Route path="/" exact render = {() => <h1>Home Page</h1>}/>
                    <Route path="/characters/" component = {CharacterPage}/>
                    <Route path="/houses/"  component = {HousesPage}/>
                    <Route path="/books/" exact component = {BooksPage}/>
                    <Route path="/books/:id" render = {
                        ({match}) => {
                            const {id} = match.params;
                         return   <BooksItem bookId = {id} />
                        }
                    }/>
                    <Route render = {() => <h1 style={{color:'red'}}>404 Not found</h1>}/>
                </Switch>
              
            </Container>
        </>
    );
  }
};


