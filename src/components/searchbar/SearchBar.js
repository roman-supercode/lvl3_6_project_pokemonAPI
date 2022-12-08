import './SearchBar.css';
import headingPic from '../../assets/img/heading.svg';
import daynight from '../../assets/img/daynight.svg';
import hamburger from '../../assets/img/hamburger.svg';

export default function SearchBar({ search }) {
    return (
        <div className='searchBarContainer'>
            <img className='logoImg' src={headingPic} alt={"logo"}></img>
            <div className='flexContainer'>
                <img src={hamburger} alt={"menu"}></img>
                <input placeholder='Pokemon name' onChange={(e) => search(e.target.value)}></input>
                <img src={daynight} alt={"darkmode"}></img>
            </div>
        </div>
    );
}
