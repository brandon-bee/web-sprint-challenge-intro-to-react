import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const openDetails = id => {
    setCurrentCharacter(id);
  }

  const closeDetails = () => {
    setCurrentCharacter(null);
  }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(resp => {
        setCharacters(resp.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
        {
          characters.map((char, idx) => {
            return <Character key={idx} id={idx + 1} info={char} open={openDetails} />
          })
        }
        {
          currentCharacter && <Details current={currentCharacter} close={closeDetails} />
        }
    </div>
  );
}

export default App;
