import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TypeCard from "../typecard/TypeCard";
import "./DetailCard.css";


const DetailCard = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);
    const [evolve, setEvolve] = useState([]);
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);
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
    console.log(evolve)

    return (<div className="detailCardDiv">
        <div className="characterBackgroundDiv">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`} alt={character.name} />
        </div>
        <div className="characterIdNameDiv">
            <FormatId />
            <p className="detailCardNameP">{character.name}</p>
        </div>
        {character.types.map((singleType, index) => {
            return (<div>
                <p key={index}>{singleType.type.name}</p>
                <TypeCard />
            </div>)

        })
        }
        {/*  onClick={handleSortMove} */}
        <div className="attacksAndMovementsClickDiv" onClick={() => setExpand1(!expand1)}>
            <p className="attacksAndMovementsP">ATTACKS AND MOVEMENTS</p>
            {/* <button>Sort moves</button> */}
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
            <p className="statsP">STATS</p>
            <p className="expandP">{expand3 ? "-" : "+"}</p>
        </div>
        {expand3 && <div className="statsDiv">
            <p className="statP">evolution path 1: {evolve.chain.species.name}</p>
        </div>}
        <Link to={"/"}>Temporary Link to Home</Link>
    </div>);
}

// const [expanded, setExpanded] = useState(false);
// return (
//     <section className="FAQSection">
//         <div className="FAQdisplayQuestion">
//             <p className="boldP" onClick={() => setExpanded(!expanded)}>Why is React the greatest thing?</p>
//             <button className="openCloseDropDownButton" onClick={() => setExpanded(!expanded)}>{expanded ? "-" : "+"}</button>
//         </div>
//         {expanded && <p className="regularP">Because it's so easy to learn without previous coding experience</p>}
//     </section>

export default DetailCard;