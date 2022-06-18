import React, { useContext, useEffect } from 'react'
import Card from '../CardPokemon/Card'
import { ContainerMyPokemonsCards, SuperContainerMyPokemons } from './styledMyPokemons'
import Header from '../Header/Header'
import { PokemonList } from '../GlobalStates/contexts'



function MyPokeDex() {
  const params = useContext(PokemonList)

  useEffect(() => params.setPage('MyPokeDex'), [])

  return (
    <SuperContainerMyPokemons>
      <Header />
      <h2>Meus Pokemons</h2>
      <ContainerMyPokemonsCards>
        <Card property={`MyPokemons`} />
      </ContainerMyPokemonsCards>
    </SuperContainerMyPokemons>
  )
}

export default MyPokeDex