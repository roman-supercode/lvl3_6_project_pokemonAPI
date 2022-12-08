import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TypeCard from "../typecard/TypeCard";
import "./DetailCard.css";

const colorsDetailCard = {
    1: 
        {type: "normal",
        color: '#A8A77A'},
    2: 
        {type: "fire",
        color: '#EE8130'},
    3: 
        {type: "water",
        color: '#6390F0'},
    4: 
        {type: "electric",
        color: '#F7D02C'},
    5: 
        {type: "grass",
        color: '#7AC74C'},
    6: 
        {type: "ice",
        color: '#96D9D6'},
    7: 
        {type: "fighting",
        color: '#C22E28'},
    8: 
        {type: "poison",
        color: '#A33EA1'},
    9: 
        {type: "ground",
        color: '#E2BF65'},
    10: 
        {type: "flying",
        color: '#A98FF3'},
    11: 
        {type: "psychic",
        color: '#F95587'},
    12: 
        {type: "bug",
        color: '#A6B91A'},
    13:    
        {type: "rock",
        color: '#B6A136'},
    14: 
        {type: "ghost",
        color: '#735797'},
    15: 
        {type: "dragon",
        color: '#6F35FC'},
    16: 
        {type: "dark",
        color: '#705746'},
    17: 
        {type: "steel",
        color: '#B7B7CE'},
    18: 
        {type: "fairy",
        color: '#D685AD'}
};

const DetailCard = (props) => {
    const params = useParams();
    const [character, setCharacter] = useState([]);
    const [evolve, setEvolve] = useState([]);
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);
    const [expand4, setExpand4] = useState(false);

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

    console.log(character.types)

    return (<div className="detailCardDiv">
        <div className="characterBackgroundDiv">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`} alt={character.name} />
        </div>
        <div className="characterIdNameDiv">
            <FormatId />
            <p className="detailCardNameP">{character.name}</p>
        </div>
        <div  className="detailCardTypeCardDiv">
        {character.types.map((singleType, index) => {
            for (const [key, value] of Object.entries(colorsDetailCard)) {
                if (value.type === singleType.type.name) {
                    let typeColor = value.color;
                    return (
                        <TypeCard
                            key={index}
                            id={key}
                            type={singleType.type.name}
                            color={typeColor}
                        />
                    );
                }
            }
        })
        }
        </div>
        <div className="attacksAndMovementsClickDiv" onClick={() => setExpand1(!expand1)}>
            <p className="attacksAndMovementsP">ATTACKS AND MOVEMENTS</p>
            <p className="expandP">{expand1 ? "-" : "+"}</p>
        </div>
        {expand1 && <div className="attacksAndMovementsDiv">
            {character.moves.map((singleMove, index) => {
                return <p className="moveP" key={index}>{singleMove.move.name}</p>
            })}
        </div>}
        <div className="abilitiesClickDiv" onClick={() => setExpand2(!expand2)}>
            <p className="abilitiesP">ABILITIES</p>
            <p className="expandP">{expand2 ? "-" : "+"}</p>
        </div>
        {expand2 && <div className="abilitiesDiv">
            {character.abilities.map((singleAbility, index) => {
                return <p className="abilityP" key={index}>{singleAbility.ability.name}</p>
            })}
        </div>}
        <div className="statsClickDiv" onClick={() => setExpand3(!expand3)}>
            <p className="statsP">STATS & BASE STAT</p>
            <p className="expandP">{expand3 ? "-" : "+"}</p>
        </div>
        {expand3 && <div className="statsDiv">
            {character.stats.map((singleStat, index) => {
                return (
                    <div key={index} className="statsFlexDiv">
                        <p className="statP">{singleStat.stat.name}</p>
                        <p className="statP">{singleStat.base_stat}</p>
                    </div>
                )
            })}

        </div>}
        <div className="evolveClickDiv" onClick={() => setExpand4(!expand4)}>
            <p className="evolvesP">EVOLUTIONS</p>
            <p className="expandP">{expand4 ? "-" : "+"}</p>
        </div>
        {expand4 && <div className="evolveDiv">
            <p className="evolveP">{evolve.chain.species.name}</p>
            <p className="evolveP">{evolve.chain.evolves_to[0]?.species.name}</p>
            <p className="evolveP">{evolve.chain.evolves_to[0]?.evolves_to[0]?.species.name}</p>
        </div>}
    </div>);
}

export default DetailCard;
// ======================================================================
// EMILY'S NOTES FOR FUTURE SORT BUTTON, PLEASE LEAVE ME HERE :)
// const handleSortMove = () => {
//     moves.map((move) => {
//         moves.push(move);
//         setSortMove(moves)
//     })

//     console.log(moves[0].move.name)

//     setAlpha(current => !current);
//     alpha ? sortMove.sort((a, b) => a.move.name.localeCompare(b.move.name)) : sortMove.sort((a, b) => b.move.name.localeCompare(a.move.name));
//     setSortMove(sortMove)
// }

// const [sortMove, setSortMove] = useState();
// const [alpha, setAlpha] = useState(false);
// let moves = [];

/* <button>Sort moves</button> */ 
    // ======================================================================