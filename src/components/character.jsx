import React from "react";
import { useFetchCharactersQuery } from "../services/slices";


const Character = () => {
  const { data, error, isLoading } = useFetchCharactersQuery(1); 

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
      <h3 className="text-lg font-normal mb-6">API Slice </h3>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data?.results?.slice(0, 8).map((char) => (
          <div
            key={char.id}
            className="bg-white cursor-pointer  shadow rounded p-4 flex flex-col items-center"
          >
            <img
              src={char.image}
              alt={char.name}
              className="md:w-32 md:h-32 w-28 h-28  rounded mb-2 hover:scale-90 transition-transform duration-300"
            />
            <p className="font-semibold">{char.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
