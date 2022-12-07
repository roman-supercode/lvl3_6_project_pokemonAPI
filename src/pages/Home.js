
import React, { useEffect, useState } from 'react';
import HomeCard from '../components/homecard/HomeCard';

const Home = () => {
    const [allPokemon, setAllPokemon] = useState();
    // const [allPokemonArray, setAllPokemonArray] = useState();
    const [selectedPokemon, setSelectedPokemon] = useState();
    const [exampleURL, setExampleURL] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then(response => response.json())
            .then(allPokemonAPI => {
                setAllPokemon(allPokemonAPI);
                // setAllPokemonArray(Object.entries(allPokemon));
                setExampleURL(allPokemonAPI?.results[0]?.url);
                // setAllPokemonArray(Object.entries(allPokemonAPI));
            });
    }, []);

    //Die Infos aus der URL von diesem Pokemon holen
    console.log("außerhalb von useEff", selectedPokemon);
    useEffect(() => {
        if (exampleURL === undefined) return;
        console.log("Innerhalb useEffect");
        fetch(`${exampleURL}`)
            .then(response => response.json())
            .then(selectedPokemonAPI => {
                setSelectedPokemon(selectedPokemonAPI);
                console.log("Test:", selectedPokemon);
            });
    }, [exampleURL]);
    // ===================================================================

    if (allPokemon === undefined) return;



    return (
        <div>
            <HomeCard
                imgURL={selectedPokemon?.sprites.front_default}
                id={selectedPokemon?.id}
                name={selectedPokemon?.name}

            />
            {allPokemon.results.map((object, index) => {
                return (
                    <HomeCard
                        name={object.name}
                        key={index}
                        imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`}
                        id={index + 1}
                    />);
            })}

        </div>
    );
};

export default Home;