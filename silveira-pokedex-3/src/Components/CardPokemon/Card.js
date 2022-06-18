import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContainerCard } from './styleCard'
import { PokemonList } from '../GlobalStates/contexts'


function Card(props) {
  const params = useContext(PokemonList)
  const arrayPokemons = params[`${props.property}`] && params[`${props.property}`].sort((a,b)=> a.id - b.id)
  .map((pokemon) => {
    return (
      <ContainerCard key={pokemon.order}>
        <p>{pokemon.name.toUpperCase()}</p>
        <img src={
          pokemon.id <650 ? pokemon.sprites.other.dream_world.front_default : 
        pokemon.sprites.other.home.front_shiny} alt={'pokemon'}/>
        <div>
          <Link to='/pokemon/pokedexdetails'>
            <button onClick={() => params.getPokemonDetails(pokemon.id, props.property)}> Detalhes</button>
          </Link>
          {props.property === 'PokemonsData' ?
            <button onClick={() => params.addOrRemoveToMyPokemons(pokemon.id, props.property)}> Capturar </button>
            :
            <button onClick={() => params.addOrRemoveToMyPokemons(pokemon.id, props.property)}> Soltar </button>}
        </div>
      </ContainerCard>
    )
  })
  return (
    <>
      {arrayPokemons}
    </>
  )
}

export default Card