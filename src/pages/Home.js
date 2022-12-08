import React, { useEffect, useState } from 'react';
import HomeCard from '../components/homecard/HomeCard';


const Home = (props) => {
    const [allPokemon, setAllPokemon] = useState();
    const [useAbleData, setuseAbleData] = useState();


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905")
            .then(response => response.json())
            .then(allPokemonAPI => {
                setAllPokemon(allPokemonAPI);
                setuseAbleData(allPokemonAPI.results);
            });
    }, []);


    useEffect(() => {
        if (allPokemon === undefined) {
            return;
        }
        if (props.searchTerm === "") {
            setuseAbleData(allPokemon);
        }
        // setSearchTerm(pokemon/${searchTerm});
        let length = (props.searchTerm).length;

        setuseAbleData(allPokemon.results.filter(el => el.name.slice(0, length).toLowerCase() === (props.searchTerm).toLowerCase().replaceAll(" ", "-")));

    }, [props.searchTerm]);

    if (allPokemon === undefined) return;
    return (
        <div className='home'>
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