import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../contexts/userContext";

export const Header = () => {

    const navigate = useNavigate();
    const { user, getIsLoggedIn } = useContext(UserContext);
    const [searchWords, setSearchWords ] = useState('');


    const changeHandler = (e) => {
        setSearchWords(e.target.value);
    };

    const searchHandler = (e) => {

        e.preventDefault();

        navigate(`/search/${searchWords}`);

    };

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
                            :  <li><Link to="/logout">LOGOUT</Link></li>
                    }

                </ul>
            </div>
            <div id="sub-navigation">
                {
                    getIsLoggedIn()
                        ? <ul>
                            <li><Link to={`/reviews/${user.id ? user.id : user.objectId}`}>MY REVIEWS</Link></li>
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
