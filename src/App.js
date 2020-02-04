import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters: [],
      searchField:''
    };

    // This is the  way to bind the 'this' used in the functions
    //becasue by default the JS dosent set the scope of 'this', this is not a
    // good way because then we need to do the binding for every new method,
    // to get rid of this, we use arrow functions as in ES6
    //this.handleChange= this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }

  handleChange=(e)=>{
    this.setState({searchField: e.target.value});
  }
  render()
  {
    const { monsters, searchField } = this.state;

    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase()
    .includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <h1 className="monster-heading">Malicious Monster</h1>
      <SearchBox placeholder="Search Monsters"
      handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
