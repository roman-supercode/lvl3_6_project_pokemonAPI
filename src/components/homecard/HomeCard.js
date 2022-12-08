import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeCard.css';


function HomeCard(props) {
    // Die Nullen an die ID packen
    const FormatId = () => {
        if (props.id < 10) {
            return <p>#00{props.id}</p>;
        } else if (props.id < 100) {
            return <p>#0{props.id}</p>;
        } else {
            return <p>#{props.id}</p>;
        }
    };

    //Den ersten Buchstaben der Namen groß schreiben
    let theName = props.name;
    let theNameUpperCase = theName.charAt(0).toUpperCase() + theName.slice(1);

    return (
        <section className='homecard'>
            <Link className='homeLink' to={`/detail/${props.name}`}>
                <img src={`${props.imgURL}`} />
                <article>
                    <FormatId />
                    <p className='pokeName'>{theNameUpperCase}</p>
                </article>
            </Link>
        </section >
    );
}

export default HomeCard;