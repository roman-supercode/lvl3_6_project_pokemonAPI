import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailCard.css";

// #001 bulbasaur image type attacks and movements

const DetailCard = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then(res => res.json())
            .then((character) => {
                setCharacter(character);
            })
    }, [params.name])

    if (character.name === undefined) return;

    console.log(character)
    return (<div className="detailCardDiv">
        <div className="characterBackgroundDiv">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${character.id}.svg`} alt={character.name} />
        </div>
        <p>{character.name}</p>
        {character.types.map((singleType, index) => {
            return <p key={index}>{singleType.type.name}</p>
        })
        }
    </div>);
}

export default DetailCard;