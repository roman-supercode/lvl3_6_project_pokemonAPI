
import React, { useEffect, useState } from 'react';
import HomeCard from '../components/homecard/HomeCard';


const Home = () => {
    const [allPokemon, setAllPokemon] = useState();
    // const [allPokemonArray, setAllPokemonArray] = useState();
    const [selectedPokemon, setSelectedPokemon] = useState();
    const [exampleURL, setExampleURL] = useState();



    // const [allPokemonArray, setAllPokemonArray] = useState();

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




    // ============== Wieso ist "Test" undefined =========================

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
                console.log(object);
                // console.log(selectedPokemon.sprites.back_default)

                return (<HomeCard
                    name={object.name}
                    key={index}
                // imgURL={selectedPokemon.sprites.back_default}
                />)
            })}

        </div>
    );
};

export default Home;