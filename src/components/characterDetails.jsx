import { useParams } from "react-router-dom";
import { useFetchCharacterByIdQuery } from "../services/slices";
import { useNavigate } from 'react-router-dom';

const CharacterDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useFetchCharacterByIdQuery(id);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6">Error loading character</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="flex justify-between items-center mb-6">
       <div>
        <h1 className="text-3xl font-bold mb-4">Character Details</h1>
        <h3 className="text-lg font-normal mb-6">From Ricky and Morty </h3>
       </div>
        <button onClick={() => navigate(`/characters`)} className="bg-amber-700 rounded-lg px-5 py-3 text-white font-medium cursor-pointer" >Character List</button>
      </div>
      
          
      <div className="bg-white shadow border border-amber-700 rounded p-6 flex flex-col md:flex-row gap-6">
        <img
          src={data.image}
          alt={data.name}
          className="w-48 h-48 rounded"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Species:</strong> {data.species}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Location:</strong> {data.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
