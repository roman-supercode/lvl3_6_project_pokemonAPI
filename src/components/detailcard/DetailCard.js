import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailCard.css";
// const [sortMove, setSortMove] = useState();
// const [alpha, setAlpha] = useState(false);
// let moves = [];
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
const DetailCard = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);
    const [evolve, setEvolve] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then(res => res.json())
            .then((character) => {
                setCharacter(character);
            })
    }, [params.name])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${character.id}`)
            .then(res2 => res2.json())
            .then((evolve) => {
                setEvolve(evolve)
            })
    }, [character.id])

    if (character.name === undefined) return;
    if (character.id === undefined) return;

    const FormatId = () => {
        if (character.id < 10) {
            return <p>#00{character.id}</p>
        } else if (character.id < 100) {
            return <p>#0{character.id}</p>
        } else {
            return <p>#{character.id}</p>
        }
    }

    return (<div className="detailCardDiv">
        <div className="characterBackgroundDiv">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`} alt={character.name} />
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
        <p className="abilitiesP">ABILITIES</p>
        <div className="abilitiesDiv">
            {character.abilities.map((singleAbility, index) => {
                return <p className="abilityP" key={index}>{singleAbility.ability.name}</p>
            })}
        </div>
        <p className="statsP">STATS</p>
        <div className="statsDiv">
            {character.abilities.map((singleAbility, index) => {
                return <p className="statsP" key={index}>{singleAbility.ability.name}</p>
            })}
        </div>
    </div>);
}

export default DetailCard;