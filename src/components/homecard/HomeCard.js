import { Link } from 'react-router-dom';
import './HomeCard.css';


function HomeCard(props) {
    return (
        <section className='homecard'>
            <Link to={props.name}>
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