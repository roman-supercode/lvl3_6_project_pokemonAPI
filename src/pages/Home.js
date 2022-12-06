import React, { useEffect, useState } from 'react';
import HomeCard from '../components/homecard/HomeCard';

const Home = () => {
    console.log("Render");
    const [allPokemon, setAllPokemon] = useState();
    const [selectedPokemon, setSelectedPokemon] = useState();
    const [exampleURL, setExampleURL] = useState();



    // const [allPokemonArray, setAllPokemonArray] = useState();
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=100&limit=1154")
            .then(response => response.json())
            .then(allPokemonAPI => {
                setAllPokemon(allPokemonAPI);
                // setAllPokemonArray(Object.entries(allPokemon));
                setExampleURL(allPokemonAPI?.results[0]?.url);

            });
    }, []);

    // if (allPokemon === undefined) return;

    //Die URL holen indem alle Infos vom Beispiel Pokemon sind
    //results[0] ist "electrode"




    //Die Infos aus der URL von diesem Pokemon holen

    useEffect(() => {
        if (exampleURL === undefined) return;
        console.log("TesTs");
        fetch(`${exampleURL}`)
            .then(response => response.json())
            .then(selectedPokemonAPI => {
                setSelectedPokemon(selectedPokemonAPI);

            });
    }, [exampleURL]);
    console.log(selectedPokemon);



    return (
        <div>
            <HomeCard
                imgURL={selectedPokemon?.sprites.front_default}
                id={selectedPokemon?.id}
                name={selectedPokemon?.name}
            />
        </div>
    );
};

export default Home;