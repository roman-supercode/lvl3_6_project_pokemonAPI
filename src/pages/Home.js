
import React, { useEffect, useState } from 'react';
import HomeCard from '../components/homecard/HomeCard';
import Searchbar from "../components/searchbar/SearchBar";

const Home = () => {
    const [allPokemon, setAllPokemon] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [useAbleData, setuseAbleData] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
            .then(response => response.json())
            .then(allPokemonAPI => {
                setAllPokemon(allPokemonAPI);
                setuseAbleData(allPokemonAPI.results);
            });
    }, []);

    function searchFunction(search) {
        setSearchTerm(search);
    }


    useEffect(() => {
        if (allPokemon === undefined) {
            return;
        }
        if (searchTerm === "") {
            setuseAbleData(allPokemon);
        }
        // setSearchTerm(pokemon/${searchTerm});
        let length = (searchTerm).length;

        setuseAbleData(allPokemon.results.filter(el => el.name.slice(0, length).toLowerCase() === (searchTerm).toLowerCase().replaceAll(" ", "-")));

    }, [searchTerm]);







    // ================= Bilder Version ==============

    // let version1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`;
    // let version2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
    // let version2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`;

    // ==============================================

    if (allPokemon === undefined) return;


    return (
        <div className='home'>

            <Searchbar search={searchFunction} />
            <div className='homecards'>
                {useAbleData.map((object, index) => {
                    let i = object.url.slice(-6, -1).replace("/", "").replace("n", "").replace("o", "").replace("m", "");
                    return (

                        <HomeCard
                            name={object.name}
                            key={index}
                            imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png`}
                            id={i}
                        />);
                })}

            </div>

        </div>
    );
};

export default Home;