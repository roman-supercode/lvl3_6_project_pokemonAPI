import React from 'react';
import TypeCard from '../components/typecard/TypeCard';
import { useState, useEffect } from 'react';
import Heading from "../assets/img/heading.svg";

const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

const Menu = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type`)
            .then(res => res.json())
            .then(typesObj => {
                // console.log(typesObj.results); // ✔
                setTypes(typesObj.results.filter(item => item.name !== "unknown" && item.name !== "shadow"));
            });
    }, []);
    // console.log(types);

    return (
        <div className='typeContainer'>
            <h2 className='typeStyle'>TYPE</h2>
            <div className='typeGrid'>
                {types.map((type, index) => {
                    for (const [key, value] of Object.entries(colours)) {
                        if (key === type.name) {
                            let typeColor = value;
                            // console.log(value);
                            return (
                                <TypeCard
                                    type={type.name}
                                    key={index}
                                    color={typeColor}
                                    id={index + 1}
                                />
                            );
                        }
                    }
                    return (
                        <TypeCard
                            type={type.name}
                            key={index}
                            color={"#fff"}
                            id={index + 1}
                        />
                    );
                })
                }
            </div>
        </div>
    );
};

export default Menu;