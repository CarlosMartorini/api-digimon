import Button from "../Button";
import { Container, Image } from "./styles";


const CardDigimon = ({digimon, func2, isFavoritesList, handleRemove }) => {
    const { name, level, img } = digimon;
    return(
        <Container>
            <div>{name}</div>
            <Image src={img}></Image>
            <div>{level}</div>
            {
                isFavoritesList 
                ? 
                (<Button deleted={true} onClick={() => handleRemove(digimon)} >Remove</Button>) 
                : 
                (<Button onClick={() => func2(digimon)} >Add</Button>)
            }
        </Container>
    )
}

export default CardDigimon;