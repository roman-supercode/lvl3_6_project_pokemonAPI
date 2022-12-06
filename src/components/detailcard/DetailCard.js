import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailCard.css";

// #001 bulbasaur image type attacks and movements

const DetailCard = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}/`)
            .then(res => res.json())
            .then((character) => {
                setCharacter(character);
            })
    }, [params.name])

    if (character.name === undefined) return;

    console.log(character)
    return (<div className="detailCardDiv">
        <p>{character.name}</p>
        <img src={character.sprites.front_default} alt={character.name} />
        {character.types.map((singleType, index) => {
            return <p key={index}>{singleType.type.name}</p>
        })
        }
    </div>);
}

export default DetailCard;