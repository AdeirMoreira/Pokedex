import axios from "axios";

const BaseUrl = 'https://pokeapi.co/api/v2/'

export const GetAllPokemons = (setAllPokenons,offSet) => {
    axios.get(`${BaseUrl}pokemon?limit=20&offset=${offSet}`).then(response => {
        setAllPokenons(response.data.results)
    }).catch(err => {
        console.log(err.response.data)
    })
}

export const GetPokemonData = (name, array, setPokemonData, separetePokemonsInMyPokemons) => {
    axios.get(`${BaseUrl}pokemon/${name}`).then(response => {
        array.push(response.data)
        if (array.length === 20) {
            const newArray = separetePokemonsInMyPokemons(array)
            const orderedList = newArray.sort((a, b) => {
                return a.id - b.id
            })
            setPokemonData(orderedList)
        }
    }).catch(err => {
        console.log(err.response.data)
    })
} 