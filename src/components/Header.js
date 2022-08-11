import {Link} from "react-router-dom";
import * as authService from '../services/authService'
import {useLocalStorage} from "./hooks/userLocalStorage";
import {useContext} from "react";
import {UserContext} from "../contexts/userContext";

export const Header = () => {

    const { getIsLoggedIn } = useContext(UserContext);

    console.log(getIsLoggedIn());


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
                    <form action="#" method="get" acceptCharset="utf-8">
                        <label htmlFor="search-field">SEARCH</label>
                        <input type="text" name="search field" defaultValue="Enter search here" id="search-field"
                               className="blink search-field"/>
                        <input type="submit" value="GO!" className="search-button"/>
                    </form>
                </div>
            </div>
        </div>
    )

}
