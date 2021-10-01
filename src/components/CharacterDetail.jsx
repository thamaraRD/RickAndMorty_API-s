import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const CharacterDetail = () =>{
const { id } = useParams()
const [character, setCharacter] = useState([]);

const getOneCharacter = async () => {
const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
console.log(data);
setCharacter(data.data)
}
useEffect(() => {
getOneCharacter();
}, [id])

return(
<div>
        <h1>{character.name}</h1>
        <h3>Especie:{character.species}</h3>
        <h3>Status:{character.status}</h3>
        <img src={character.image} alt="" />
</div>
)

}
export default CharacterDetail;