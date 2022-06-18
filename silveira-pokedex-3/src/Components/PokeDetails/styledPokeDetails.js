import styled from "styled-components";

export const SuperContainerMaster = styled.div`
h3{
    font-size: 50px;
}
`
export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    h1{
    text-align: center;
    font-size: 80px;
    align-self: center;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const ContainerMaster = styled.div`
display: grid;
padding: 20px;
gap: 20px;
grid-template:
"photo1 status types" 200px
"photo1 status moves" 200px
"photo2 status moves" 200px
"photo2 status moves" 200px
/ 1fr 1fr 1fr;
font-size: 25px;
`
export const Photo1 = styled.div`
border: 3px solid black;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
grid-area: photo1;
`

export const Photo2 = styled.div`
border: 3px solid black;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
grid-area: photo2;
`

export const Stats = styled.div`
border: 3px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
grid-area: status;
span{
    font-weight: 700;
}
`

export const Types = styled.div`
border: 3px solid black;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
grid-area: types;
`

export const Moves = styled.div`
border: 3px solid black;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
grid-area: moves;
`
export const Buttons = styled.button`
    padding: 5px;
    font-size: 20px;
    border: none;
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    border-radius: 10px;
    
`