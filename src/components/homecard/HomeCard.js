import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeCard.css';


function HomeCard(props) {
    // console.log(props.url);
        // useEffect(() => {
        //     fetch(props.url)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data.sprites.front_default);
        //         });
        // });
    return (
        <section className='homecard'>
            <Link to={`/detail/${props.name}`}>
                <img src={`${props.imgURL}`} />
                <article>
                    <p className='pokeID'>{props.id}</p>
                    <p className='pokeName'>{props.name}</p>
                </article>
            </Link>
        </section >
    );
}

export default HomeCard;