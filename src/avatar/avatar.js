import React, { useState, useEffect } from "react";

export default function Avatar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/avatar/characters")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="avatar">
        <h2>Avatar Characters</h2>
        {characters.map((character) => (
          <div className="character" key={character.id}>
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}
