import React from 'react'
import { ContainerHeader, Red, Black, White, SuportPokeball, Logoimg } from './styles'
import { ComponetPokeball } from '../Pokeball/Pokeball'
import Logo from '../../Assets/Imagens/pokedexLogo.png'

const Header = () => {
  return (
    <ContainerHeader>
      <Red></Red>
      <Black>
        <Logoimg src={Logo}/>
        </Black>
      <SuportPokeball>
        <ComponetPokeball />
      </SuportPokeball>
      <White></White>
    </ContainerHeader>
  )
}

export default Header