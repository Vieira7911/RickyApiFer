import React, { useState } from "react";
import "./Characters.css";

const Characters = () => {
  const [character, setCharacter] = useState({
    id: "",
    name: "",
    gender: "",
    status: "",
    species: "",
    origin: "",
    type: "",
    location: "",
    image: "",
  });
  const [characterList, setCharacterList] = useState([]);
  var [listavacia, setlistavacia] = useState(0);
  var [idsObtenidos, setidsObtenidos] = useState([]);
  const [primeraConsulta, setPrimeraConsulta] = useState(true);

  const generateCharacter = () => {
    console.log("lista vacia " + listavacia);
    setPrimeraConsulta(false);
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        let randomIndex = Math.floor(Math.random() * data.results.length);
        if (idsObtenidos.includes(data.results[randomIndex].id)) {
          randomIndex++;
        }
        setidsObtenidos(idsObtenidos.concat(data.results[randomIndex].id));
        const randomCharacter = data.results[randomIndex];
        setCharacter({
          id: randomCharacter.id,
          name: randomCharacter.name,
          gender: randomCharacter.gender,
          status: randomCharacter.status,
          species: randomCharacter.species,
          origin: randomCharacter.origin.name,
          type: randomCharacter.type,
          location: randomCharacter.location.name,
          image: randomCharacter.image,
        });
      });
    setCharacterList(characterList.concat(character));
    setlistavacia(listavacia + 1);
  };

  return (
    <>
      <div className="mainCharacters">
        <div className="botondiv">
          <button onClick={generateCharacter}>Generador</button>
        </div>
        {primeraConsulta ? (
          <div className="Informacion">
          </div>
        ) : (
          <div className="Informacion">
            <div className="profileFoto">
              <img src={character.image} alt="" />
            </div>
            <div className="info">
              <h1>{character.name}</h1>
              <h2>Información:</h2>
              <p>
                <strong>Género:</strong> <br /> {character.gender}
              </p>
              <p>
                <strong>Estado:</strong> <br />
                {character.status}
              </p>
              <p>
                <strong>Especie:</strong>
                <br /> {character.species}
              </p>
              <p>
                <strong>Origen:</strong> <br />
                {character.origin}
              </p>
              <p>
                <strong>Ubicación:</strong>
                <br /> {character.location}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
