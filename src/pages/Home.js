
import React, { useEffect, useState } from 'react';
import HomeCard from '../components/homecard/HomeCard';
import Searchbar from "../components/searchbar/SearchBar"

const Home = () => {
    const [allPokemon, setAllPokemon] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
            .then(response => response.json())
            .then(allPokemonAPI => {
                setAllPokemon(allPokemonAPI);
            });
    }, []);


    if (allPokemon === undefined) return;


    // ================= Bilder Version ==============

    // let version1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`;
    // let version2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
    // let version2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`;

    // ==============================================



    return (
        <div className='home'>

            <Searchbar />
            <div className='homecards'>
                {allPokemon.results.map((object, index) => {
                    return (

                        <HomeCard
                            name={object.name}
                            key={index}
                            imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
                            id={index + 1}
                        />);
                })}

            </div>

        </div>
    );
};

export default Home;