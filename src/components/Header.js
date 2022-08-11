import {Link, useNavigate} from "react-router-dom";
import * as authService from '../services/authService'
import {useLocalStorage} from "../hooks/userLocalStorage";
import {useContext, useState} from "react";
import {UserContext} from "../contexts/userContext";

export const Header = () => {

    const navigate = useNavigate();
    const { getIsLoggedIn } = useContext(UserContext);
    const [searchWords, setSearchWords ] = useState('');


    const changeHandler = (e) => {
        setSearchWords(e.target.value);
    };

    const searchHandler = (e) => {

        e.preventDefault();

        const {search_field} = Object.fromEntries(new FormData(e.target));

        navigate(`/search/${search_field}`);

    }


    return (
        <div id="header">
            <h1 id="logo"><Link to="/">HOME</Link></h1>
            <div id="navigation">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/now_playing">IN THEATERS</Link></li>
                    <li><Link to="/upcoming">COMING SOON</Link></li>
                    <li><Link to="/reviews">REVIEWS</Link></li>
                    <li><Link to="/news">NEWS</Link></li>
                    {
                        !getIsLoggedIn()
                            ?  <li><Link to="/login">LOGIN/REGISTER</Link></li>
                            : null
                    }
                    {
                        getIsLoggedIn()
                            ? <li><Link to="/logout">LOGOUT</Link></li>
                            : null
                    }

                </ul>
            </div>
            <div id="sub-navigation">
                {
                    getIsLoggedIn()
                        ? <ul>
                            <li><Link to="/ratings">YOUR RATINGS</Link></li>
                            <li><Link to="/comments">LATEST COMMENTS</Link></li>
                            <li><Link to="/favourites">YOUR FAVOURITES</Link></li>
                        </ul>
                        : null
                }
                <div id="search">
                    <form onSubmit={searchHandler}>
                        <label htmlFor="search-field">SEARCH</label>
                        <input type="text"
                               name="search_field"
                               placeholder="Enter search here"
                               id="search_field"
                               className="blink search-field"
                               onChange={changeHandler}
                               value={searchWords}
                        />
                        <input type="submit" value="GO!" className="search-button"/>
                    </form>
                </div>
            </div>
        </div>
    )

}
