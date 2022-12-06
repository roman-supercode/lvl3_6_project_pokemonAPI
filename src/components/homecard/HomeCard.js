import './HomeCard.css';


function HomeCard(props) {
    return (
        <section className='homecard'>
            <img src={`${props.imgURL}`} />
            <article>
                <p className='pokeID'>{props.id}</p>
                <p className='pokeName'>{props.name}</p>
            </article>
        </section>
    );
}

export default HomeCard;