import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Container } from "react-bootstrap";
import { SearchBox } from "./components/search-box/search-box.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
          robots: [],
          searchField: ''
        }
    }
   
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users') // dohvaća podatke
        .then(response => response.json()) // konvertira u format razumljiv javascriptu (json)
        .then(users => this.setState({ robots: users })) // uzima korisnika i postavlja ih u objekt state
    }

    handleChange = (e) => {
      this.setState({ searchField: e.target.value });
    }

    render() {
      const { robots, searchField } = this.state;
      // UMJESTO DESTRUCTURING BI SE TO MOGLO NAPISATI I OVAKO:
      // const robots = this.state.robots;
      // const searchField = this.state.searchField;
      const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
      return (
          <div className="App">
            <Container className="text-center">
            <h1 className="display-1" >Robots Rolodex</h1>
              <SearchBox 
                placeholder='Search robots' 
                handleChange={this.handleChange} 
              />
              <CardList robotsprop={filteredRobots}/>
            </Container>
          </div>
      );
    }
}

export default App;