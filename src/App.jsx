import './App.css'
import { useState ,useEffect } from 'react'
import CardList from './components/cardList/cardList'
import SearchBox from './components/search/searchbox';

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filterMonster, setFilterMonster] = useState(monsters)
  
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
    
  },[])
  
  useEffect(()=>{
    const newFilteredMonster = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      });
      
      setFilterMonster(newFilteredMonster)  

  },[monsters,searchField])


  const extractText = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <>
      <div className="App">
        <h1 className="heading" >CATS PARADISE</h1>
        <SearchBox onChangeHandler={extractText}
          placeHolder={'Search PussyCat'}
          className={'searchbox'}
        />
        <CardList monsters={filterMonster} />
      </div>
    </>
  )
}

export default App



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: " ",
//     };
//   }



//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users }
//           },
//         ))
//   }



//   onSearchChange =(event) => { 
//     const searchField = event.target.value.toLocaleLowerCase();

//    this.setState(()=>{
//      return {searchField:searchField }
//    })
//  }




//   render() 
//   {

//     const {monsters , searchField} = this.state;
//     const {onSearchChange} = this

//     const filterMonster = monsters.filter(
//       (monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField)
//     }) 

//     return (
//       <>
//         <div className="App">
//           <h1 className="heading" >MEEEW MEEWW</h1>
//           <SearchBox onChangeHandler={onSearchChange} placeHolder={'Search PussyCat'} className={'searchbox'}/>
//           <CardList monsters={filterMonster} />
//         </div>

//       </>
//     )
//   }
// }

// export default App
