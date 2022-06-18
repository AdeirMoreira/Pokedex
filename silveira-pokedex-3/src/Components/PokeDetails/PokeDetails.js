import React, { useContext, useEffect, useState } from 'react'
import { PokemonList } from '../GlobalStates/contexts'
import Header from '../Header/Header'
import { SuperContainerMaster, ContainerMaster, Photo1, Photo2, Stats, Types, Moves, ContainerTitulo, Buttons } from '../PokeDetails/styledPokeDetails'


const PokeDetails = () => {
   const [inPokedex, setInPokex] = useState(false)
   const [property, setProperty] = useState('')
   const params = useContext(PokemonList)

   useEffect(() => params.setPage('PokeDetails'), [])
   useEffect(() => setProperty(params.PokeDetails[1]), [])
   useEffect(() => seachPokemon())

   const changeProperty = () => {
      property === 'PokemonsData' ? setProperty('MyPokemons') : setProperty('PokemonsData')
   }

   const treeFunctions = (Boolean) => {
      changeProperty()
      putInPokedex(Boolean)
      params.addOrRemoveToMyPokemons(params.PokeDetails[0].id, property)
   }

   const putInPokedex = (Boolean) => {
      setInPokex(Boolean)
   }

   const seachPokemon = () => {
      const pokemon = params.MyPokemons.find(pokemon => pokemon.id === params.PokeDetails[0].id)
      pokemon ? setInPokex(false) : setInPokex(true)
   }
   return (
      <SuperContainerMaster>
         <Header />
         {params.PokeDetails.length > 0 &&
            <ContainerTitulo>
               <h1>{params.PokeDetails[0].name}</h1>
               {inPokedex ?
                  <div>
                     <Buttons
                        onClick={() => treeFunctions(true)}>
                        Adicionar a PokeDex
                     </Buttons>
                  </div>
                  :
                  <div>
                     <Buttons
                        onClick={() => treeFunctions(false)}>
                        Remover da PokeDex
                     </Buttons>
                  </div>
               }
            </ContainerTitulo>}
         {params.PokeDetails.length > 0 &&
            <ContainerMaster>
               <Photo1>
                  <img src={params.PokeDetails[0].sprites.front_default} />
               </Photo1>
               <Photo2>
                  <img src={params.PokeDetails[0].sprites.back_default} />
               </Photo2>
               <Stats>
                  <div>
                     <h3>Status:</h3>
                     {params.PokeDetails[0].stats.map(stats => {
                        return (
                           <div key={stats.stat.name}>
                              <li> <span>{stats.stat.name}</span>: {stats.base_stat} </li>
                           </div>
                        )
                     })}
                  </div>
               </Stats>
               <Types>
                  <h3>Types:</h3>
                  {params.PokeDetails[0].types.map(stats => {
                     return (
                        <div key={stats.type.name}>
                           <li> {stats.type.name}</li>
                        </div>
                     )
                  })}
               </Types>
               <Moves>
                  <h3>Moves:</h3>
                  {params.PokeDetails[0].moves.map((stats, index) => {
                     return (
                        index < 5 &&
                        <div key={stats.move.name}>
                           <li> {stats.move.name}</li>
                        </div>
                     )
                  })}
               </Moves>
            </ContainerMaster>
         }
      </SuperContainerMaster>
   )
}

export default PokeDetails