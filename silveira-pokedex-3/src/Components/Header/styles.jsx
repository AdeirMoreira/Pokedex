import styled from 'styled-components'

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 5px solid black;
`
export const Red = styled.div`
    height: 71px;
    background-color: red;
`
export const Black = styled.div`
    height: 10px;
    background-color: black;
`

export const Logoimg = styled.img`
    width: 300px;
    height: 100px;
    position: absolute;
    left: 210px;
    top: 10px;
    @media screen and (min-width: 510px) and (max-width: 580px){
        left: 150px;
    }
    @media screen and (min-width: 450px) and (max-width: 509px){
        left: 100px;
    }
    @media screen and (max-width: 449px){
        max-width: 200px;
        left: 120px;
    }
`

export const White = styled.div`
    height: 71px;
    background-color: white;
`
export const SuportPokeball = styled.div`
    margin-top: 75px;
    width: 100px;
    height: 110px;
    left: 100px;
    position: absolute;
    @media screen  and (min-width: 510px) and (max-width: 580px){
        left: 50px;
    }
    @media screen and (max-width: 509px){
        left: 10px;
    }
`
