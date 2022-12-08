import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeCard from '../components/homecard/HomeCard';


const TypeList = () => {
    const [poke, setPoke] = useState();
    const [pokeName, setPokeName] = useState([]);
    const params = useParams();
    // const paramsOne = useParams();

    // console.log(params);
    useEffect(() => {
        // const pokemonARRAY = [];
        fetch(`https://pokeapi.co/api/v2/type/${params.type}`)
            .then(res => res.json())
            .then(typeObj => {
                // console.log(typeObj.pokemon);
                // setPoke(typeObj.pokemon);
                typeObj.pokemon.map(pokemonDATA => {
                    fetchPokemonData(pokemonDATA);
                    // console.log(pokemonDATA.pokemon.url);
                    //     let url = pokemonDATA.pokemon.url;
                    //     fetch(`${url}`)
                    //         .then(res => res.json())
                    //         .then((pokeData) => {
                    //             // console.log(pokeData);
                    //             pokemonARRAY.push({ name: pokeData.name, id: pokeData.id, sprites: pokeData.sprites.other.home.front_default });
                    //         });
                });
            });
        // setPoke(pokemonARRAY);
    }, [params]);

    const pokemonARRAY = [];
    const fetchPokemonData = (pokemonDATA) => {
        let url = pokemonDATA.pokemon.url;
        fetch(`${url}`)
            .then(res => res.json())
            .then((pokeData) => {
                // console.log(pokeData);
                pokemonARRAY.push({ name: pokeData.name, id: pokeData.id, sprites: pokeData.sprites.other.home.front_default });
            });
    };
    // console.log(pokemonARRAY);

    // if (poke === undefined) return;
    // console.log(poke);

    return (
        <div>
            {pokemonARRAY.map((item, index) => {
                // console.log(item);
                // console.log(item.pokemon.url);
                return (
                    <HomeCard
                        name={item.pokemon.name}
                        key={index}
                        // url={item.pokeName.url}
                        id={item.id}
                        imgURL={item.sprites}
                    />
                );
            })}
        </div>
    );
};

export default TypeList;
