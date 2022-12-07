import { Link } from 'react-router-dom';
import './HomeCard.css';







function HomeCard(props) {

    const FormatId = () => {
        if (props.id < 10) {
            return <p>#00{props.id}</p>
        } else if (props.id < 100) {
            return <p>#0{props.id}</p>
        } else {
            return <p>#{props.id}</p>
        }
    }


    return (
        <section className='homecard'>
            <Link className='homeLink' to={`/detail/${props.name}`}>
                <img src={`${props.imgURL}`} />
                <article>
                    <FormatId />
                    <p className='pokeName'>{props.name}</p>
                </article>
            </Link>
        </section >
    );
}

export default HomeCard;