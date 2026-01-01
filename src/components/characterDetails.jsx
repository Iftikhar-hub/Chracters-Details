

const CharacterDetails = ({ character }) => {
    if (!character) {
        return <div>No character data available.</div>;
    } 
    return (
        <div className="bg-white shadow rounded p-4 flex flex-col items-center">
            <img
                src={character.image}
                alt={character.name}
                className="md:w-32 md:h-32 w-28 h-28 rounded mb-2"
            />
            <p className="font-semibold text-xl mb-2">{character.name}</p>
            <p className="text-gray-600">Status: {character.status}</p>
            <p className="text-gray-600">Species: {character.species}</p>
            <p className="text-gray-600">Gender: {character.gender}</p>
            <p className="text-gray-600">Origin: {character.origin.name}</p>
        </div>
    );
}   ;

export default CharacterDetails;