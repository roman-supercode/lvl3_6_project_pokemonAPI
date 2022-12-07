import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeCard from '../components/homecard/HomeCard';


const TypeList = () => {
    const [poke, setPoke] = useState([]);
    // const [pokeName, setPokeName] = useState([]);
    const params = useParams();
    // const paramsOne = useParams();

    // console.log(params);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${params.type}`)
            .then(res => res.json())
            .then(typeObj => {
                console.log(typeObj.pokemon);
                setPoke(typeObj.pokemon);
            });
    }, [params]);

    // useParams
    return (
        <div>
            {poke.map((item, index) => {
                // console.log(item);
                return (
                    <HomeCard
                        name={item.pokemon.name}
                        key={index}
                    // imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${}.svg`}
                    />
                );
            })}

        </div>
    );
};

export default TypeList;
