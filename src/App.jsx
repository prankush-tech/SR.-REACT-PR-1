import './App.css'
import { Component } from 'react'
import CardList from './components/cardList/cardList'
import SearchBox from './components/search/searchbox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: " ",
    };
  }



  componentDidMount() {
    fetch('https://demon-slayer-api.onrender.com/v1/')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
        ))
  }



  onSearchChange =(event) => { 
    const searchField = event.target.value.toLocaleLowerCase();

   this.setState(()=>{
     return {searchField:searchField }
   })
 }


  render() 
  {

    const {monsters , searchField} = this.state;
    const {onSearchChange} = this

    const filterMonster = monsters.filter(
      (monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField)
    }) 

    return (
      <>
        <div className="App">
          <SearchBox onChangeHandler={onSearchChange} placeHolder={'Search DEMONS'} className={'searchbox'}/>
          <CardList monsters={filterMonster} />
        </div>

      </>
    )
  }
}

export default App
