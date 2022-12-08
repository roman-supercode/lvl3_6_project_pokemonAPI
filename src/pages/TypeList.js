import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeCard from '../components/homecard/HomeCard';
import SearchBar from '../components/searchbar/SearchBar';

const TypeList = () => {
    const [poke, setPoke] = useState([]);
    const [pokeName, setPokeName] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${params.type}`)
            .then(res => res.json())
            .then(typeObj => {
                // console.log(typeObj);
                setPoke(typeObj.pokemon);
            });
    }, [params]);

    useEffect(() => {
        Promise.all(poke.map((item) => {
            return fetch(item.pokemon.url)
                .then(res => res.json());
        })).then(response => {
            setPokeName(response);
        });
    }, [poke]);

    console.log(pokeName);
    if (pokeName === undefined) return;

    return (
        <div className='homecards'>

            {pokeName.map((item, index) => {
                return (
                    <HomeCard
                        name={item.name}
                        key={index}
                        id={item.id}
                        imgURL={item.sprites.other.home.front_default}
                        alt={item.name}
                    />
                );
            })}
        </div>
    );
};

export default TypeList;
