import { Link } from 'react-router-dom';
import './HomeCard.css';

function HomeCard(props) {
    // Die Nullen an die ID packen
    const FormatId = () => {
        if (props.id < 10) {
            return <p className='pokeID'>#00{props.id}</p>;
        } else if (props.id < 100) {
            return <p className='pokeID'>#0{props.id}</p>;
        } else {
            return <p className='pokeID'>#{props.id}</p>;
        }
    };

    //Den ersten Buchstaben der Namen groß schreiben
    let theName = props.name;
    let theNameUpperCase = theName.charAt(0).toUpperCase() + theName.slice(1);

    return (
        <section className='homecard'>
            <Link className='homeLink' to={`/detail/${props.name}`}>
                <img src={`${props.imgURL}`} alt={props.name} />
                <article>
                    <FormatId />
                    <p className='pokeName'>{theNameUpperCase}</p>
                </article>
            </Link>
        </section >
    );
}

export default HomeCard;