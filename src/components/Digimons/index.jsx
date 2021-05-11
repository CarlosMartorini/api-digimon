import CardDigimon from "../CardDigimon"

const Digimons = ({ digimons, func, isFavoritesList, handleRemove}) => {
    return(
        <>
            {
                digimons.map((digimon, index) => (
                    <CardDigimon key={index} digimon={digimon} func2={func} isFavoritesList={isFavoritesList} handleRemove={handleRemove} />
                ))
            }
        </>
    )
}

export default Digimons;