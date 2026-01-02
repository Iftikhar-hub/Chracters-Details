import React, { useState } from "react";
import { useFetchCharactersQuery } from "../services/slices";

import { useNavigate } from "react-router-dom";



const Character = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching } = useFetchCharactersQuery(page); 

    const cardsPerPage = 8;
    
    const handleNextPage = () => {
    if (page < data?.info?.pages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

   
  const displayedCharacters = data?.results?.slice(0, cardsPerPage) || [];
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
        <h3 className="text-lg font-normal mb-6">API Slice </h3>
        <div className="w-full flex flex-row justify-between">
          <button className="px-4 py-2 bg-amber-700 rounded text-white font-medium cursor-pointer disabled:opacity-50" onClick={handlePrevPage} disabled={page === 1 || isFetching}>
           Previous
          </button>
          <span className="text-amber-700 font-medium"> Page Number  {page} </span>
          <button className="px-4 py-2 bg-amber-700   text-white font-medium cursor-pointer rounded disabled:opacity-50" onClick={handleNextPage} disabled={isFetching || page === data?.info?.pages}>
            Next
         </button>
        </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 gap-6">
        {displayedCharacters.map((char) => (
          <div
            key={char.id}
            onClick={() => navigate(`/character/${char.id}`)}
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
