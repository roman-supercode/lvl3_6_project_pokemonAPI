import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailCard.css";

// #001 bulbasaur image type attacks and movements

const DetailCard = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);
    // const [sortMove, setSortMove] = useState();
    // const [alpha, setAlpha] = useState(false);
    // let moves = [];

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then(res => res.json())
            .then((character) => {
                setCharacter(character);
            })
    }, [params.name])

    if (character.name === undefined) return;

    const FormatId = () => {
        if (character.id < 10) {
            return <p>#00{character.id}</p>
        } else if (character.id < 100) {
            return <p>#0{character.id}</p>
        } else {
            return <p>#{character.id}</p>
        }
    }
    // to test: Mew (151), bulbasaur (1), onix (95)


    //SORT moves alphabetically
    // const handleSortMove = () => {
    //     character.moves.map((move) => {
    //         moves.push(move);
    //     })

    //     console.log(moves[0].move.name)

    //     setAlpha(current => !current);
    //     alpha ? sortMove.sort((a, b) => a.move.name - b.move.name) : sortMove.sort((a, b) => b.move.name - a.move.name);
    //     setSortMove(sortMove)
    // }

    return (<div className="detailCardDiv">
        <div className="characterBackgroundDiv">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${character.id}.svg`} alt={character.name} />
        </div>
        <div className="characterIdNameDiv">
            <FormatId />
            <p>{character.name}</p>
        </div>
        {character.types.map((singleType, index) => {
            return <p key={index}>{singleType.type.name}</p>
        })
        }
        <p className="attacksAndMovementsP">ATTACKS AND MOVEMENTS</p>
        {/* onClick={handleSortMove} */}
        <button>Sort moves</button>
        <div className="attacksAndMovementsDiv">
            {character.moves.map((singleMove, index) => {
                return <p className="moveP" key={index}>{singleMove.move.name}</p>
            })}
        </div>
    </div>);
}

export default DetailCard;