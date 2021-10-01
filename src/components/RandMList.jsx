import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {

  NavLink,
} from "react-router-dom";


const RandMlist = () =>{
    const [character, setCharacter] = useState([]);

  const getAllCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(response.data.results);
    setCharacter(response.data.results)
  }

useEffect(() => {
  getAllCharacters()
}, []);


    return(
      <div>
      <h1>Personajes de Rick and Morty</h1>
      {character?.map(character => (
        <div key={character.id} className="style">
          <NavLink to={`personaje/${character.id}`}>
          <h1>{character.name}</h1>
          <h3>Especie:{character.species}</h3>
          <h3>Status:{character.status}</h3>
          <img src={character.image} alt="" />
          </NavLink>
        </div>
      )
        )}
    </div>
  );

}
export default RandMlist;
